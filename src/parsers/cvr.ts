import { findInstants, findPeriods, Instant, parseXbrlFile, Period } from '../xbrl/index.js';
import { ensureArray } from '../util.js';
import type { AnnualReport, Balance, IncomeStatement } from '../types';
import type { NumberWithUnitRef, XbrliXbrl } from '../xbrl/types';
import type { Parser } from './parser';

/**
 * Parser that understands the XBRL taxonomy for many Danish companies as fetched from CVR.
 * @see https://erhvervsstyrelsen.dk/vejledning-teknisk-vejledning-og-dokumentation-regnskab-20-taksonomier-aktuelle
 */
export default class CvrParser implements Parser {
  parseAnnualReport(xmlString: string): AnnualReport {
    const xbrl = parseXbrlFile(xmlString);

    if (!xbrl['xbrli:xbrl']) {
      throw new Error('Only xbrli is supported right now.');
    }

    const doc = xbrl['xbrli:xbrl'];
    const { id, startDate, endDate, VAT } = findBestPeriod(doc);
    const balanceInstant = findPrimaryBalanceInstant(doc);

    return {
      VAT,
      currency: findPrimaryCurrency(doc),
      period: {
        id,
        startDate,
        endDate
      },
      incomeStatement: createIncomeStatement(doc, id),
      balance: createBalanceSheet(doc, balanceInstant),
    };
  }
}

function findPrimaryCurrency(doc: XbrliXbrl): string {
  const unit = doc['xbrli:unit']
    .filter(u => u['xbrli:measure'].toLowerCase().startsWith('iso4217:'))[0];

  if (!unit) {
    throw new Error('Cannot find currency');
  }

  return unit['xbrli:measure'].split(':')[1];
}

function findBestPeriod(doc: XbrliXbrl): { VAT: string } & Period {
  let periods = findPeriods(doc);
  // Sort by end date to find "the latest period" and sort out all periods that don't conform.
  periods = periods.sort((a, b) => b.endDate.localeCompare(a.endDate));
  const latestEndDate = periods[0].endDate;

  // Assume companies have a field for ProfitLoss since is the mandatory
  // final field to report on the income statement. Extract the context ID for
  // each of these to find candidate period IDs. Only those periods that are
  // left are the actual yearly period.
  const contextIdCandidates = new Set(ensureArray(doc['fsa:ProfitLoss']).map(e => e['@_contextRef']));
  const typeOfReportContextId = doc['gsd:InformationOnTypeOfSubmittedReport']['@_contextRef'];

  // Only consider periods that have the profit loss field
  // Then sort them by whether or not:
  // 1. They were used to declare the report
  // 2. They have a "scenario" attached to them.
  // The latter can sometimes _really_ mess with the period and show numbers from a completely different year.
  periods = periods
    .filter(p => p.endDate === latestEndDate && contextIdCandidates.has(p.id))
    .sort((a, b) => {
      const aPoints = (typeOfReportContextId === a.id ? 1 : 0)
        + (a.scenario ? -1 : 0);
      const bPoints = (typeOfReportContextId === b.id ? 1 : 0)
        + (b.scenario ? -1 : 0);
      return bPoints - aPoints;
    });

  return periods[0];
}

function findPrimaryBalanceInstant(doc: XbrliXbrl): Instant {
  let instants = findInstants(doc);

  // Sort by end date to find "the latest period" and sort out all periods that don't conform.
  instants = instants.sort((a, b) => b.date.localeCompare(a.date));
  const latestInstant = instants[0].date;

  // Assume most companies have assets statement
  // context ID for each of these to find candidate period IDs. Only those
  // periods that are left are the actual yearly period.
  const contextIdCandidates = new Set(ensureArray(doc['fsa:Assets']).map(e => e['@_contextRef']));

  // Only consider periods that have the profit loss field
  // Then sort them by whether or not:
  // 1. They were used to declare the report
  // 2. They have a "scenario" attached to them.
  // The latter can sometimes _really_ mess with the period and show numbers from a completely different year.
  instants = instants
    .filter(p => p.date === latestInstant && contextIdCandidates.has(p.id))
    .sort((a, b) => {
      return (b.scenario ? -1 : 0) - (a.scenario ? -1 : 0);
    });

  return instants[0];
}

function createIncomeStatement(doc: XbrliXbrl, periodId: string): IncomeStatement {

  const incomeStatement: IncomeStatement = {
    profitLoss: extractNumber(doc['fsa:ProfitLoss'], periodId) || 0,
    employeeExpenses: extractNumber(doc['fsa:EmployeeBenefitsExpense'], periodId) || 0,
    tax: extractTax(doc, periodId),
    grossProfitLoss: extractNumber(doc['fsa:GrossProfitLoss'], periodId) || 0,
    costOfSales: extractNumber(doc['fsa:CostOfSales'], periodId),
    changeInInventory: extractNumber(doc['fsa:ChangeInInventoriesOfFinishedGoodsWorkInProgressAndGoodsForResale'], periodId),
    ownWorkCapitalized: extractNumber(doc['fsa:WorkPerformedByEntityAndCapitalised'], periodId),
    grossResult: extractNumber(doc['fsa:GrossResult'], periodId),
    revenue: extractNumber(doc['fsa:Revenue'], periodId),
    depreciationAmortization: extractNumber(doc['fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'], periodId) || 0,
    otherOperatingExpenses: extractNumber(doc['fsa:OtherOperatingExpenses'], periodId) || 0,
    otherOperatingIncome: extractNumber(doc['fsa:OtherOperatingIncome'], periodId) || 0,
    externalExpenses: extractExternalExpenses(doc, periodId),
    otherFinancialExpenses: extractNumber(doc['fsa:OtherFinanceExpenses'], periodId),
    otherFinancialIncome: extractNumber(doc['fsa:OtherFinanceIncome'], periodId),
    profitLossBeforeTax: extractNumber(doc['fsa:ProfitLossFromOrdinaryActivitiesBeforeTax'], periodId) || 0,
    profitLossFromOperatingActivities: extractNumber(doc['fsa:ProfitLossFromOrdinaryOperatingActivities'], periodId) || 0,
    calculatedEBITDA: 0,
    calculatedEBIT: 0,
  };

  adjustRevenueAndGrossProfit(incomeStatement, doc);

  incomeStatement.calculatedEBITDA = calculateEBITDA(incomeStatement);
  incomeStatement.calculatedEBIT = calculateEBIT(incomeStatement);

  return incomeStatement;
}

function adjustRevenueAndGrossProfit(incomeStatement: IncomeStatement, doc: XbrliXbrl): void {
  if (incomeStatement.grossProfitLoss || !!doc['fsa:GrossProfitLoss'] || !incomeStatement.revenue) {
    return;
  }

  // Some companies have revenue but not gross profit.
  // In these cases, we need to calculate it based on Danish accounting principles.
  incomeStatement.grossProfitLoss = (incomeStatement.revenue || 0)
    + (incomeStatement.changeInInventory || 0)
    + (incomeStatement.ownWorkCapitalized || 0)
    + (incomeStatement.otherOperatingIncome || 0)
    - (incomeStatement.externalExpenses || 0);
}

function calculateEBITDA(i: IncomeStatement): number {
  return i.profitLoss
    + i.tax
    + (i.depreciationAmortization || 0)
    // It is assumed that financial expenses and income correspond to interest,
    // but it is not fully clear from the taxonomy
    + (i.otherFinancialExpenses || 0)
    - (i.otherFinancialIncome || 0);
}

function calculateEBIT(i: IncomeStatement): number {
  return i.calculatedEBITDA
    - (i.depreciationAmortization || 0);
}

function extractTax(doc: XbrliXbrl, periodId: string): number {
  // This is the total tax, return by itself.
  if (doc['fsa:TaxExpense']) {
    return extractNumber(doc['fsa:TaxExpense'], periodId) || 0;
  }

  // Otherwise sum the ordinary and extraordinary taxes.
  const tax = extractNumber(doc['fsa:TaxExpenseOnOrdinaryActivities'], periodId) || 0;
  return tax + (extractNumber(doc['fsa:TaxExpenseOnExtraordinaryEvents'], periodId) || 0);
}

function extractExternalExpenses(doc: XbrliXbrl, periodId: string): number {
  // This is the total external expenses, return by itself.
  if (doc['fsa:ExternalExpenses']) {
    return extractNumber(doc['fsa:ExternalExpenses'], periodId) || 0;
  }

  // da: Omkostninger til råvarer og hjælpematerialer
  // da: Andre eksterne omkostninger
  return (extractNumber(doc['fsa:RawMaterialsAndConsumablesUsed'], periodId) || 0)
    + (extractNumber(doc['fsa:OtherExternalExpenses'], periodId) || 0);
}

function createBalanceSheet(doc: XbrliXbrl, instant: Instant): Balance {
  const { id, date } = instant;

  return {
    date,
    assets: {
      total: extractNumber(doc['fsa:Assets'], id) || 0,
      noncurrentAssets: {
        total: extractNumber(doc['fsa:NoncurrentAssets'], id),
        intangibleAssets: {
          total: extractNumber(doc['fsa:IntangibleAssets'], id),
          goodwill: extractNumber(doc['fsa:Goodwill'], id),
          completedDevelopmentProjects: extractNumber(doc['fsa:CompletedDevelopmentProjects'], id),
        },
        tangibleAssets: {
          total: extractNumber(doc['fsa:PropertyPlantAndEquipment'], id),
        },
        financialAssets: {
          total: extractNumber(doc['fsa:LongtermInvestmentsAndReceivables'], id),
        }
      },
      currentAssets: {
        total: extractNumber(doc['fsa:CurrentAssets'], id),
        cashAndCashEquivalents: extractNumber(doc['fsa:CashAndCashEquivalents'], id),
        shorttermReceivables: extractNumber(doc['fsa:ShorttermReceivables'], id),
        inventories: extractNumber(doc['fsa:Inventories'], id)
      }
    },
    liabilitiesAndEquity: {
      total: extractNumber(doc['fsa:LiabilitiesAndEquity'], id) || 0,
      equity: {
        total: extractNumber(doc['fsa:Equity'], id),
        contributedCapital: extractNumber(doc['fsa:ContributedCapital'], id),
        retainedEarnings: extractNumber(doc['fsa:RetainedEarnings'], id),
      },
      provisions: {
        total: extractNumber(doc['fsa:Provisions'], id) || 0
      },
      liabilitiesOtherThanProvisions: {
        total: extractNumber(doc['fsa:LiabilitiesOtherThanProvisions'], id),
        shorttermLiabilities: extractNumber(doc['fsa:ShorttermLiabilitiesOtherThanProvisions'], id),
        longtermLiabilities: extractNumber(doc['fsa:LongtermLiabilitiesOtherThanProvisions'], id)
      }
    }
  };
}

function extractNumber(node: undefined | NumberWithUnitRef | NumberWithUnitRef[], contextRef: string): number | undefined {
  if (!node) {
    return;
  }

  node = ensureArray(node).find(n => n['@_contextRef'] === contextRef);

  if (!node) {
    return;
  }

  return node['#text'];
}
