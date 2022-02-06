import fs from 'fs';
import path from 'path';
import { CvrParser, parseAnnualReport } from '../src/index.js';
import type { Balance, IncomeStatement } from '../src/types';

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

    expect(report).toEqual(expect.objectContaining({
      VAT: '65305216',
      currency: 'DKK',
      period: {
        id: 'ctx1',
        startDate: '2020-01-01',
        endDate: '2020-12-31'
      }
    }));

    expect(report.incomeStatement).toEqual(expect.objectContaining<IncomeStatement>({
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
      grossResult: undefined,
    }));

    expect(report.balance).toEqual(expect.objectContaining<Balance>({
      date: '2020-12-31',
      // These should be the same and balance.
      assets: {
        total: 4_545_803_000,
        noncurrentAssets: {
          total: 3_568_312_000,
          intangibleAssets: {
            total: 140_419_000,
            completedDevelopmentProjects: undefined,
            goodwill: 140_419_000,
          },
          tangibleAssets: {
            total: 611_917_000,
          },
          financialAssets: {
            total: 30_190_000
          }
        },
        currentAssets: {
          total: 977_491_000,
          inventories: 1_264_000,
          cashAndCashEquivalents: 97_462_000,
          shorttermReceivables: 878_765_000,
        }
      },
      liabilitiesAndEquity: {
        total: 4_545_803_000,
        equity: {
          total: 975_853_000,
          contributedCapital: 763_400_000,
          retainedEarnings: 212_453_000
        },
        provisions: {
          total: 477_982_000
        },
        liabilitiesOtherThanProvisions: {
          total: 3_091_968_000,
          shorttermLiabilities: 2_802_859_000,
          longtermLiabilities: 289_109_000
        }
      }
    }));
  });

  it('should parse an annual report from a Danish company without revenue but with gross profit/loss', () => {
    const report = parseAnnualReport(report2, new CvrParser());

    expect(report).toEqual(expect.objectContaining({
      VAT: '33070691',
      currency: 'DKK',
      period: {
        id: 'ID_0',
        startDate: '2020-08-01',
        endDate: '2021-07-31'
      }
    }));

    expect(report.incomeStatement).toEqual(expect.objectContaining<IncomeStatement>({
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
      grossResult: undefined,
    }));


    expect(report.balance).toEqual(expect.objectContaining<Balance>({
      date: '2021-07-31',
      assets: {
        total: 17_530_647,
        noncurrentAssets: {
          total: 5_429_203,
          intangibleAssets: {
            total: 4_951_654,
            goodwill: undefined,
            completedDevelopmentProjects: 4_951_654,
          },
          tangibleAssets: {
            total: 159_461,
          },
          financialAssets: {
            total: 318_088,
          }
        },
        currentAssets: {
          total: 12_101_444,
          inventories: undefined,
          cashAndCashEquivalents: 3_659_926,
          shorttermReceivables: 8_441_518
        }
      },
      liabilitiesAndEquity: {
        total: 17_530_647,
        equity: {
          total: 8_036_888,
          contributedCapital: 644_231,
          retainedEarnings: 3_530_367
        },
        provisions: {
          total: 1_073_155
        },
        liabilitiesOtherThanProvisions: {
          total: 8_420_604,
          shorttermLiabilities: 8_420_604,
          longtermLiabilities: 0
        }
      }
    }));
  });
});