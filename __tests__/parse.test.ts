import { CvrParser, parseAnnualReport } from '../src/index.js';
import { loadReport } from './util.js';
import type { Balance, IncomeStatement } from '../src/index';

describe('parse', () => {
  it('should parse an annual report from a Danish company with revenue', () => {
    const report = parseAnnualReport(loadReport(1), new CvrParser());

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
      changeInInventory: undefined,
      costOfSales: undefined,
      ownWorkCapitalized: undefined,
      revenue: 4_714_614_000,
      grossProfitLoss: 1_863_940_000,
      externalExpenses: 2_858_049_000,
      employeeExpenses: 1_580_001_000,
      otherOperatingExpenses: 12_865_000,
      otherOperatingIncome: 7_375_000,
      calculatedEBITDA: 271_074_000,
      profitLossFromOperatingActivities: 6_150_000,
      depreciationAmortization: 264_924_000,
      otherFinancialIncome: 22_411_000,
      otherFinancialExpenses: 51_439_000,
      calculatedEBIT: 6_150_000,
      profitLossBeforeTax: -22_878_000,
      profitLoss: -2_8633_000,
      tax: 5_755_000,
      grossResult: undefined,
    }));

    expect(report.incomeStatement.calculatedEBIT).toEqual(report.incomeStatement.profitLossFromOperatingActivities);

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
    const report = parseAnnualReport(loadReport(2), new CvrParser());

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
      changeInInventory: undefined,
      costOfSales: undefined,
      ownWorkCapitalized: undefined,
      grossProfitLoss: 40_535_965,
      employeeExpenses: 36_625_898,
      calculatedEBITDA: 3_910_067,
      depreciationAmortization: 955_970,
      profitLossFromOperatingActivities: 2_954_097,
      otherFinancialExpenses: 84_114,
      otherFinancialIncome: 10_338,
      calculatedEBIT: 2_954_097,
      profitLossBeforeTax: 2_880_321,
      tax: 645_297,
      profitLoss: 2_235_024,
      revenue: undefined,
      externalExpenses: 0,
      otherOperatingExpenses: 0,
      otherOperatingIncome: 0,
      grossResult: undefined,
    }));

    expect(report.incomeStatement.calculatedEBIT).toEqual(report.incomeStatement.profitLossFromOperatingActivities);

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

  it('should parse an annual report for a company using non-xbrli format', () => {
    const report = parseAnnualReport(loadReport(3), new CvrParser());

    expect(report).toEqual(expect.objectContaining({
      VAT: '38343521',
      currency: 'DKK',
      period: {
        id: 'c11',
        startDate: '2020-01-01',
        endDate: '2020-12-31'
      }
    }));

    expect(report.incomeStatement).toEqual(expect.objectContaining<IncomeStatement>({
      grossProfitLoss: 12_246_133,
      employeeExpenses: 11_203_157,
      calculatedEBITDA: 1_042_976,
      depreciationAmortization: 243_858,
      profitLossFromOperatingActivities: 799_118,
      otherFinancialExpenses: 55_911,
      otherFinancialIncome: 115_300,
      calculatedEBIT: 799_118,
      profitLossBeforeTax: 858_507,
      tax: 208_964,
      profitLoss: 649_543,
      revenue: undefined,
      externalExpenses: 0,
      otherOperatingExpenses: 0,
      otherOperatingIncome: 0,
      grossResult: undefined,
    }));

    expect(report.incomeStatement.calculatedEBIT).toEqual(report.incomeStatement.profitLossFromOperatingActivities);

    expect(report.balance).toEqual(expect.objectContaining<Balance>({
      date: '2020-12-31',
      assets: {
        total: 8_752_513,
        noncurrentAssets: {
          total: 1_638_836,
          intangibleAssets: {
            total: undefined,
            goodwill: undefined,
            completedDevelopmentProjects: undefined,
          },
          tangibleAssets: {
            total: 1_303_961,
          },
          financialAssets: {
            total: 334_875,
          }
        },
        currentAssets: {
          total: 7_113_677,
          inventories: 165_000,
          cashAndCashEquivalents: 92_870,
          shorttermReceivables: 6_855_807
        }
      },
      liabilitiesAndEquity: {
        total: 8_752_513,
        equity: {
          total: 1_718_822,
          contributedCapital: 50_000,
          retainedEarnings: 1_668_822
        },
        provisions: {
          total: 191_332
        },
        liabilitiesOtherThanProvisions: {
          total: 6_842_359,
          shorttermLiabilities: 6_842_359,
          longtermLiabilities: undefined
        }
      }
    }));
  });

  it('should parse an annual report with multiple period references that conflict a bit', () => {
    // This test case could not produce correct income statement on version 0.3.4 and below
    const report = parseAnnualReport(loadReport(4), new CvrParser());

    expect(report.VAT).toEqual('31189810');
    expect(report.currency).toEqual('DKK');
    expect(report.period).toEqual({
      // c21 is the first period but c64 is the one that reports the type of
      // report and takes precedence.
      id: 'c64',
      startDate: '2020-01-01',
      endDate: '2020-12-31'
    });

    expect(report.incomeStatement).toEqual(expect.objectContaining<Partial<IncomeStatement>>({
      revenue: undefined,
      externalExpenses: 0,
      employeeExpenses: 63_285_043,
      otherOperatingExpenses: 0,
      otherOperatingIncome: 0,
      calculatedEBITDA: 28_190_132,
      profitLossFromOperatingActivities: 26_148_298,
      depreciationAmortization: 2_041_834,
      otherFinancialIncome: 1_168_004,
      otherFinancialExpenses: 225_309,
      calculatedEBIT: 26_148_298,
      profitLossBeforeTax: 27_090_993,
      profitLoss: 20_227_235,
      tax: 6_863_758,
      grossProfitLoss: 91_475_175,
      grossResult: undefined,
    }));
  });

  it('should parse an "old" annual report', () => {
    // This test case failed on version 0.3.4 and below
    const report = parseAnnualReport(loadReport(5), new CvrParser());

    expect(report.VAT).toEqual('32295843');
    expect(report.currency).toEqual('DKK');
    expect(report.period).toEqual({
      id: 'NC2',
      startDate: '2012-07-01',
      endDate: '2013-06-30'
    });

    expect(report.incomeStatement).toEqual(expect.objectContaining<Partial<IncomeStatement>>({
      profitLoss: 69_411
    }));
  });
});