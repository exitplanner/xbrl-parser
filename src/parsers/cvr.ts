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
    const { id, startDate, endDate, VAT } = findPrimaryPeriod(doc);
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
  const units = Array.isArray(doc['xbrli:unit']) ? doc['xbrli:unit'] : [doc['xbrli:unit']];
  const unit = units
    .filter(u => u['xbrli:measure'].toLowerCase().startsWith('iso4217:'))[0];

  if (!unit) {
    throw new Error('Cannot find currency');
  }

  return unit['xbrli:measure'].split(':')[1];
}

function findPrimaryPeriod(doc: XbrliXbrl): ({ VAT: string } & Period) {
  const periods = findPeriods(doc);

  // Assume most companies have expenses for employees so extract the
  // context ID for each of these to find candidate period IDs. Only those
  // periods that are left are the actual yearly period.
  const contextIdCandidates = new Set(ensureArray(doc['fsa:ProfitLoss']).map(e => e['@_contextRef']));

  // Sort remaining periods by their date. It is assumed the latest one is the
  // correct one.
  const latestPeriod = periods
    .filter(p => contextIdCandidates.has(p.id))
    .sort((a, b) => b.endDate.localeCompare(a.endDate))[0];

  // It's a hard error if we cannot find the annual period.
  if (!latestPeriod) {
    throw new Error('Cannot find annual period');
  }

  return latestPeriod;
}

function findPrimaryBalanceInstant(doc: XbrliXbrl): Instant {
  const periods = findInstants(doc);

  // Assume most companies have assets statement
  // context ID for each of these to find candidate period IDs. Only those
  // periods that are left are the actual yearly period.
  const contextIdCandidates = new Set(ensureArray(doc['fsa:Assets']).map(e => e['@_contextRef']));

  // Sort remaining periods by their date. It is assumed the latest one is the
  // correct one.
  const latestInstant = periods
    .filter(p => contextIdCandidates.has(p.id))
    .sort((a, b) => b.date.localeCompare(a.date))[0];

  // It's a hard error if we cannot find the annual period.
  if (!latestInstant) {
    throw new Error('Cannot find latest balance instant');
  }

  return latestInstant;
}

function createIncomeStatement(doc: XbrliXbrl, periodId: string): IncomeStatement {

  const incomeStatement: IncomeStatement = {
    profitLoss: extractNumber(doc['fsa:ProfitLoss'], periodId) || 0,
    employeeExpenses: extractNumber(doc['fsa:EmployeeBenefitsExpense'], periodId) || 0,
    tax: extractTax(doc, periodId),
    grossProfitLoss: extractNumber(doc['fsa:GrossProfitLoss'], periodId),
    grossResult: extractNumber(doc['fsa:GrossResult'], periodId),
    revenue: extractNumber(doc['fsa:Revenue'], periodId),
    depreciationAmortization: extractNumber(doc['fsa:DepreciationAmortisationExpenseAndImpairmentLossesOfPropertyPlantAndEquipmentAndIntangibleAssetsRecognisedInProfitOrLoss'], periodId),
    otherOperatingExpenses: extractNumber(doc['fsa:OtherOperatingExpenses'], periodId),
    otherOperatingIncome: extractNumber(doc['fsa:OtherOperatingIncome'], periodId),
    externalExpenses: extractNumber(doc['fsa:ExternalExpenses'], periodId),
    otherFinancialExpenses: extractNumber(doc['fsa:OtherFinanceExpenses'], periodId),
    otherFinancialIncome: extractNumber(doc['fsa:OtherFinanceIncome'], periodId),
    profitLossBeforeTax: extractNumber(doc['fsa:ProfitLossFromOrdinaryActivitiesBeforeTax'], periodId) || 0,
    profitLossFromOperatingActivities: extractNumber(doc['fsa:ProfitLossFromOrdinaryOperatingActivities'], periodId) || 0,
    calculatedEBITDA: 0,
    calculatedEBIT: 0,
  };

  incomeStatement.calculatedEBITDA = calculateEBITDA(incomeStatement);
  incomeStatement.calculatedEBIT = calculateEBIT(incomeStatement);

  return incomeStatement;
}

function calculateEBITDA(i: IncomeStatement): number {
  // Some companies have revenue, some have grossProfitLoss. They are similar
  // but not quite the same it seems.
  // TODO: Need to investigate this more!
  const startingPoint = i.revenue ? i.revenue : i.grossProfitLoss;
  if (!startingPoint) {
    return 0;
  }
  return startingPoint
    + (i.otherOperatingIncome || 0)
    - i.employeeExpenses
    - (i.externalExpenses || 0)
    - (i.otherOperatingExpenses || 0);
}

function calculateEBIT(i: IncomeStatement): number {
  return i.calculatedEBITDA
    - (i.depreciationAmortization || 0)
    - (i.otherFinancialExpenses || 0)
    + (i.otherFinancialIncome || 0);
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
        total: extractNumber(doc['fsa:Provisions'], id)
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

  node = ensureArray(node);

  return node.filter(n => n['@_contextRef'] === contextRef)[0]['#text'];
}
