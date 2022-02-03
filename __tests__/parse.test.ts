import fs from 'fs';
import path from 'path';
import { CvrParser, parseAnnualReport } from '../src/index';
import { AnnualReport } from '../src/types';

describe('parse', () => {
  let report1: string;
  let report2: string;

  beforeAll(async () => {
    let file = path.join(__dirname, './__fixtures__', 'report1.xml');
    report1 = fs.readFileSync(file, 'utf-8');
    file = path.join(__dirname, './__fixtures__', 'report2.xml');
    report2 = fs.readFileSync(file, 'utf-8');
  });

  it('should parse an annual report from a Danish company with revenue', () => {
    const report = parseAnnualReport(report1, new CvrParser());

    expect(report).toEqual(expect.objectContaining<AnnualReport>({
      VAT: '65305216',
      currency: '',
      period: {
        id: 'ctx1',
        startDate: '2020-01-01',
        endDate: '2020-12-31'
      },
      incomeStatement: {
        revenue: 4_714_614_000,
        externalExpenses: 285_8049_000,
        employeeExpenses: 1_580_001_000,
        otherOperatingExpenses: 12_865_000,
        otherOperatingIncome: 7_375_000,
        calculatedEBITDA: 271_074_000,
        profitLossFromOperatingActivities: 6_150_000,
        depreciationAmortization: 264_924_000,
        otherFinancialIncome: 22_411_000,
        otherFinancialExpenses: 51_439_000,
        calculatedEBIT: -22_878_000,
        profitLossBeforeTax: -22_878_000,
        profitLoss: -2_8633_000,
        tax: 5_755_000,
        grossProfitLoss: undefined,
      }
    }));
  });

  it('should parse an annual report from a Danish company without revenue but with gross profit/loss', () => {
    const report = parseAnnualReport(report2, new CvrParser());

    expect(report).toEqual(expect.objectContaining<AnnualReport>({
      VAT: '33070691',
      currency: '',
      period: {
        id: 'ID_0',
        startDate: '2020-08-01',
        endDate: '2021-07-31'
      },
      incomeStatement: {
        grossProfitLoss: 40_535_965,
        employeeExpenses: 36_625_898,
        calculatedEBITDA: 3_910_067,
        depreciationAmortization: 955_970,
        profitLossFromOperatingActivities: 2_954_097,
        otherFinancialExpenses: 84_114,
        otherFinancialIncome: 10_338,
        calculatedEBIT: 2_880_321,
        profitLossBeforeTax: 2_880_321,
        tax: 645_297,
        profitLoss: 2_235_024,
        revenue: undefined,
        externalExpenses: undefined,
        otherOperatingExpenses: 0,
        otherOperatingIncome: undefined,
      }
    }));
  });
});