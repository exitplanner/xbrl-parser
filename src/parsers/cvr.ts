import { parseXbrlFile } from '../xbrl/index.js';
import type { AnnualReport, IncomeStatement, Period } from '../types';
import type { NumberWithUnitRef, Xbrl, XbrliXbrl } from '../xbrl/types';
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

    return {
      VAT,
      currency: findPrimaryCurrency(doc),
      period: {
        id,
        startDate,
        endDate
      },
      incomeStatement: createIncomeStatement(doc, id)
    };
  }
}

function findPrimaryCurrency(doc: XbrliXbrl): string {
  return '';
}

function findPeriods(doc: XbrliXbrl): ({ VAT: string } & Period)[] {
  return doc['xbrli:context']
    .filter(c => !!c['xbrli:period']['xbrli:endDate'])
    .map(c => ({
      VAT: String(c['xbrli:entity']['xbrli:identifier']['#text']),
      id: c['@_id'],
      startDate: c['xbrli:period']['xbrli:startDate'] || '',
      endDate: c['xbrli:period']['xbrli:endDate'] || ''
    }));
}

function findPrimaryPeriod(doc: XbrliXbrl): ({ VAT: string } & Period) {
  const periods = findPeriods(doc);

  // Assume most companies have expenses for employees so extract the
  // context ID for each of these to find candidate period IDs. Only those
  // periods that are left are the actual yearly period.
  const contextIdCandidates = new Set(doc['fsa:EmployeeBenefitsExpense'].map(e => e['@_contextRef']));

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

function createIncomeStatement(doc: XbrliXbrl, periodId: string): IncomeStatement {

  const incomeStatement: IncomeStatement = {
    profitLoss: extractNumber(doc['fsa:ProfitLoss'], periodId) || 0,
    employeeExpenses: extractNumber(doc['fsa:EmployeeBenefitsExpense'], periodId) || 0,
    tax: extractTax(doc, periodId),
    grossProfitLoss: extractNumber(doc['fsa:GrossProfitLoss'], periodId),
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

function extractNumber(node: undefined | NumberWithUnitRef | NumberWithUnitRef[], contextRef: string): number | undefined {
  if (!node) {
    return;
  }

  if (!Array.isArray(node)) {
    node = [node];
  }

  return node.filter(n => n['@_contextRef'] === contextRef)[0]['#text'];
}
