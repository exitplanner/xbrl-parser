import { findInstants, findPeriods, findPrimaryCurrency, Instant, parseXbrlFile, Period } from '../xbrl/index.js';
import { ensureArray, extractNumber, removeUndefinedValues } from '../util.js';
import type { AnnualReportDK, Balance, IncomeStatement } from '../types';
import type { XbrliXbrlDK, KeysMatching, NumberWithUnitRef } from '../xbrl/types';
import type { Parser } from './parser';

/**
 * Parser that understands the XBRL taxonomy for many Danish companies as fetched from CVR.
 * @see https://erhvervsstyrelsen.dk/vejledning-teknisk-vejledning-og-dokumentation-regnskab-20-taksonomier-aktuelle
 */
export default class CvrParser implements Parser<AnnualReportDK> {
  parseAnnualReport(xmlString: string): AnnualReportDK {
    const xbrl = parseXbrlFile<XbrliXbrlDK>(xmlString);

    if (!xbrl['xbrli:xbrl']) {
      throw new Error('Only xbrli is supported right now.');
    }

    const doc = xbrl['xbrli:xbrl'];
    const { id, startDate, endDate, VAT } = findBestPeriod(doc);
    const balanceInstant = findPrimaryBalanceInstant(doc);

    const report: AnnualReportDK = {
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

    return report;
  }
}

function findBestPeriod(doc: XbrliXbrlDK): { VAT: string } & Period {
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

function findPrimaryBalanceInstant(doc: XbrliXbrlDK): Instant {
  let instants = findInstants(doc);

  // Sort by end date to find "the latest period" and sort out all periods that don't conform.
  instants = instants.sort((a, b) => b.date.localeCompare(a.date));
  const latestInstant = instants[0].date;

  // Assume most companies have assets, liabilities or equity since these are
  // major groups on the balance sheet.
  // Then find context ID for each of these to find candidate period IDs. Only
  // those periods that are left are the actual yearly period.
  // This is not super pretty, but it does the job in most cases.
  const fieldsToTry: KeysMatching<XbrliXbrlDK, NumberWithUnitRef | NumberWithUnitRef[] | undefined>[] = ['fsa:Assets', 'fsa:LiabilitiesAndEquity', 'fsa:Equity', 'fsa:IntangibleAssets', 'fsa:CurrentAssets'];
  let contextIdCandidates: Set<string>;

  for (const field of fieldsToTry) {
    contextIdCandidates = new Set(ensureArray(doc[field]).map(e => e['@_contextRef']));
    if (contextIdCandidates.size > 0) {
      break;
    }
  }

  // See also findBestPeriod(...) function
  instants = instants
    .filter(p => p.date === latestInstant && contextIdCandidates.has(p.id))
    .sort((a, b) => {
      return (b.scenario ? -1 : 0) - (a.scenario ? -1 : 0);
    });

  return instants[0];
}

function createIncomeStatement(doc: XbrliXbrlDK, periodId: string): IncomeStatement {
  const incomeStatement: IncomeStatement = removeUndefinedValues({
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
  });

  // In some cases, the report only has "gross result" and not a "gross
  // profit/loss". In these cases, the gross result is used as the gross
  // profit/loss as well.
  if (incomeStatement.grossProfitLoss === 0 && incomeStatement.grossResult) {
    incomeStatement.grossProfitLoss = incomeStatement.grossResult;
  }

  adjustRevenueAndGrossProfit(incomeStatement, doc);

  incomeStatement.calculatedEBITDA = calculateEBITDA(incomeStatement);
  incomeStatement.calculatedEBIT = calculateEBIT(incomeStatement);

  return incomeStatement;
}

function adjustRevenueAndGrossProfit(incomeStatement: IncomeStatement, doc: XbrliXbrlDK): void {
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

function extractTax(doc: XbrliXbrlDK, periodId: string): number {
  // This is the total tax, return by itself.
  if (doc['fsa:TaxExpense']) {
    return extractNumber(doc['fsa:TaxExpense'], periodId) || 0;
  }

  // Otherwise sum the ordinary and extraordinary taxes.
  const tax = extractNumber(doc['fsa:TaxExpenseOnOrdinaryActivities'], periodId) || 0;
  return tax + (extractNumber(doc['fsa:TaxExpenseOnExtraordinaryEvents'], periodId) || 0);
}

function extractExternalExpenses(doc: XbrliXbrlDK, periodId: string): number {
  // This is the total external expenses, return by itself.
  if (doc['fsa:ExternalExpenses']) {
    return extractNumber(doc['fsa:ExternalExpenses'], periodId) || 0;
  }

  // da: Omkostninger til råvarer og hjælpematerialer
  // da: Andre eksterne omkostninger
  return (extractNumber(doc['fsa:RawMaterialsAndConsumablesUsed'], periodId) || 0)
    + (extractNumber(doc['fsa:OtherExternalExpenses'], periodId) || 0);
}

function createBalanceSheet(doc: XbrliXbrlDK, instant: Instant): Balance {
  const { id, date } = instant;

  return {
    date,
    assets: removeUndefinedValues({
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
        shorttermReceivables: {
          total: extractNumber(doc['fsa:ShorttermReceivables'], id),
          shorttermTradeReceivables: extractNumber(doc['fsa:ShorttermTradeReceivables'], id),
          shorttermTaxReceivables: extractNumber(doc['fsa:ShorttermTaxReceivables'], id),
          shorttermReceivablesFromGroupEnterprises: extractNumber(doc['fsa:ShorttermReceivablesFromGroupEnterprises'], id)
        },
        inventories: {
          total: extractNumber(doc['fsa:Inventories'], id)
        },
        shorttermInvestments: {
          total: extractNumber(doc['fsa:ShorttermInvestments'], id)
        }
      }
    }),
    liabilitiesAndEquity: removeUndefinedValues<Balance['liabilitiesAndEquity']>({
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
        shorttermLiabilities: {
          total: extractNumber(doc['fsa:ShorttermLiabilitiesOtherThanProvisions'], id),
          shorttermDebtToCreditInstitutions: extractNumber(doc['fsa:ShorttermDebtToCreditInstitutions'], id),
          shorttermDebtToBanks: extractNumber(doc['fsa:ShorttermDebtToBanks'], id),
          shorttermMortgageDebt: extractNumber(doc['fsa:ShorttermMortgageDebt'], id),
          shorttermDebtToOtherCreditInstitutions: extractNumber(doc['fsa:ShorttermDebtToOtherCreditInstitutions'], id),
          shorttermPayablesToGroupEnterprises: extractNumber(doc['fsa:ShorttermPayablesToGroupEnterprises'], id),
          shorttermPayablesToParticipatingInterests: extractNumber(doc['fsa:ShorttermPayablesToParticipatingInterest'], id),
          shorttermPayablesToAssociates: extractNumber(doc['fsa:ShorttermPayablesToAssociates'], id),
          shorttermPayablesToJointVentures: extractNumber(doc['fsa:ShorttermPayablesToJointVentures'], id),
          shorttermPayablesToShareholdersAndManagement: extractNumber(doc['fsa:ShorttermPayablesToShareholdersAndManagement'], id),
          shorttermTaxPayables: extractNumber(doc['fsa:ShorttermTaxPayables'], id)
        },
        longtermLiabilities: {
          total: extractNumber(doc['fsa:LongtermLiabilitiesOtherThanProvisions'], id),
          longtermDebtToCreditInstitutions: extractNumber(doc['fsa:LongtermDebtToCreditInstitutions'], id),
          longtermDebtToBanks: extractNumber(doc['fsa:LongtermDebtToBanks'], id),
          longtermMortgageDebt: extractNumber(doc['fsa:LongtermMortgageDebt'], id),
          longtermDebtToOtherCreditInstitutions: extractNumber(doc['fsa:LongtermDebtToOtherCreditInstitutions'], id),
          longtermPayablesToGroupEnterprises: extractNumber(doc['fsa:LongtermPayablesToGroupEnterprises'], id),
          longtermPayablesToAssociates: extractNumber(doc['fsa:LongtermPayablesToAssociates'], id),
          longtermPayablesToParticipatingInterests: extractNumber(doc['fsa:LongtermPayablesToParticipatingInterests'], id),
          longtermPayablesToJointVentures: extractNumber(doc['fsa:LongtermPayablesToJointVentures'], id),
          longtermTaxPayables: extractNumber(doc['fsa:LongtermTaxPayables'], id),
        }
      }
    })
  };
}
