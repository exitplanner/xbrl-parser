import { findInstants, findPeriods, findPrimaryCurrency, Instant, parseXbrlFile, Period } from '../xbrl/index.js';
import { ensureArray, extractNumber, removeUndefinedValues } from '../util.js';
import type { Parser } from './parser';
import type { AnnualReport, Balance, IncomeStatement } from '../types';
import type { KeysMatching, NumberWithUnitRef, XbrliXbrlUSGAAP } from '../xbrl/types';

/**
 * Parser that understands parts of the XBRL taxonomy for US-based companies using the US-GAAP taxonomy
 * @see https://xbrl.us/home/filers/sec-reporting/taxonomies/
 */
export default class USGAAPParser implements Parser<AnnualReport> {
  parseAnnualReport(xmlString: string): AnnualReport {
    const xbrl = parseXbrlFile<XbrliXbrlUSGAAP>(xmlString);

    if (!xbrl['xbrli:xbrl']) {
      throw new Error('Only xbrli is supported right now.');
    }

    const doc = xbrl['xbrli:xbrl'];
    const { id, startDate, endDate } = findBestPeriod(doc);
    const balanceInstant = findPrimaryBalanceInstant(doc);

    return {
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

function createIncomeStatement(doc: XbrliXbrlUSGAAP, periodId: string): IncomeStatement {
  const incomeStatement: IncomeStatement = removeUndefinedValues({
    revenue: extractNumber(doc['us-gaap:RevenueFromContractWithCustomerExcludingAssessedTax'], periodId),
    grossProfitLoss: extractNumber(doc['us-gaap:GrossProfit'], periodId) || 0,
    costOfSales: extractNumber(doc['us-gaap:CostOfGoodsAndServicesSold'], periodId),
    profitLoss: extractNumber(doc['us-gaap:NetIncomeLoss'], periodId) || 0,
    profitLossFromOperatingActivities: extractNumber(doc['us-gaap:OperatingIncomeLoss'], periodId) || 0,
    profitLossBeforeTax: extractNumber(doc['us-gaap:IncomeLossFromContinuingOperationsBeforeIncomeTaxesExtraordinaryItemsNoncontrollingInterest'], periodId) || 0,
    tax: extractNumber(doc['us-gaap:IncomeTaxExpenseBenefit'], periodId) || 0,
    depreciationAmortization: extractNumber(doc['us-gaap:DepreciationDepletionAndAmortization'], periodId) || 0,
    interestExpense: extractNumber(doc['us-gaap:InterestExpense'], periodId),
    interestAndDividendIncome: extractNumber(doc['us-gaap:InvestmentIncomeInterestAndDividend'], periodId),
    calculatedEBITDA: 0,
    calculatedEBIT: 0,
  });

  incomeStatement.calculatedEBITDA = calculateEBITDA(incomeStatement);
  incomeStatement.calculatedEBIT = calculateEBIT(incomeStatement);

  return incomeStatement;
}

function createBalanceSheet(doc: XbrliXbrlUSGAAP, instant: Instant): Balance {
  const { id, date } = instant;

  return {
    date,
    assets: removeUndefinedValues({
      total: extractNumber(doc['us-gaap:Assets'], id) || 0,
      noncurrentAssets: {
        total: extractNumber(doc['us-gaap:AssetsNoncurrent'], id),
        intangibleAssets: {
          // TODO: This is probably not correct!
          total: 0,
        },
        tangibleAssets: {
          total: extractNumber(doc['us-gaap:PropertyPlantAndEquipmentNet'], id),
        },
        financialAssets: {
          // TODO: This is probably not correct!
          total: 0,
        }
      },
      currentAssets: {
        total: extractNumber(doc['us-gaap:AssetsCurrent'], id),
        cashAndCashEquivalents: extractNumber(doc['us-gaap:CashAndCashEquivalentsAtCarryingValue'], id),
        shorttermReceivables: {
          total: extractNumber(doc['us-gaap:AccountsReceivableNetCurrent'], id),
        },
        inventories: {
          total: extractNumber(doc['us-gaap:InventoryNet'], id)
        },
        shorttermInvestments: {}
      }
    }),
    liabilitiesAndEquity: removeUndefinedValues({
      total: extractNumber(doc['us-gaap:LiabilitiesAndStockholdersEquity'], id) || 0,
      equity: {
        total: extractNumber(doc['us-gaap:StockholdersEquity'], id),
      },
      provisions: {
        // TODO: This is probably not correct
        total: 0
      },
      liabilitiesOtherThanProvisions: {
        total: extractNumber(doc['us-gaap:Liabilities'], id),
        shorttermLiabilities: {
          total: extractNumber(doc['us-gaap:LiabilitiesCurrent'], id),
        },
        longtermLiabilities: {
          total: extractNumber(doc['us-gaap:LiabilitiesNoncurrent'], id),
        }
      }
    })
  };
}

function calculateEBITDA(i: IncomeStatement): number {
  return i.profitLoss
    + i.tax
    + (i.depreciationAmortization || 0)
    + (i.interestExpense || 0)
    - (i.interestAndDividendIncome || 0);
}

function calculateEBIT(i: IncomeStatement): number {
  return i.calculatedEBITDA
    - (i.depreciationAmortization || 0);
}

function findBestPeriod(doc: XbrliXbrlUSGAAP): { VAT: string } & Period {
  let periods = findPeriods(doc);
  // Sort by end date to find "the latest period" and sort out all periods that don't conform.
  periods = periods.sort((a, b) => b.endDate.localeCompare(a.endDate));
  const latestEndDate = periods[0].endDate;

  // Assume companies have a field for NetIncomeLoss since is the mandatory
  // final field to report on the income statement. Extract the context ID for
  // each of these to find candidate period IDs. Only those periods that are
  // left are the actual yearly period.
  const contextIdCandidates = new Set(ensureArray(doc['us-gaap:NetIncomeLoss']).map(e => e['@_contextRef']));
  const typeOfReportContextId = doc['dei:DocumentType']['@_contextRef'];

  periods = periods
    .filter(p => p.endDate === latestEndDate && contextIdCandidates.has(p.id))
    .sort((a, b) => {
      const aPoints = (typeOfReportContextId === a.id ? 1 : 0);
      const bPoints = (typeOfReportContextId === b.id ? 1 : 0);
      return bPoints - aPoints;
    });

  return periods[0];
}

function findPrimaryBalanceInstant(doc: XbrliXbrlUSGAAP): Instant {
  let instants = findInstants(doc);

  // Assume most companies have assets, liabilities or equity since these are
  // major groups on the balance sheet.
  // Then find context ID for each of these to find candidate period IDs. Only
  // those periods that are left are the actual yearly period.
  // This is not super pretty, but it does the job in most cases.
  const fieldsToTry: KeysMatching<XbrliXbrlUSGAAP, NumberWithUnitRef | NumberWithUnitRef[] | undefined>[] = ['us-gaap:Assets', 'us-gaap:Liabilities'];
  let contextIdCandidates: Set<string>;

  for (const field of fieldsToTry) {
    contextIdCandidates = new Set(ensureArray(doc[field]).map(e => e['@_contextRef']));
    if (contextIdCandidates.size > 0) {
      break;
    }
  }

  instants = instants
    .filter(p => contextIdCandidates.has(p.id))
    .sort((a, b) => b.date.localeCompare(a.date));
  return instants[0];
}