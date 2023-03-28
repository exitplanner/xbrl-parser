import { parseAnnualReport, USGAAPParser } from '../src/index.js';
import { loadReport } from './util.js';
import type { IncomeStatement, Balance } from '../src/index';

describe('parse - us gaap', () => {
  it('should parse an annual report from a Danish company with revenue', () => {
    const report = parseAnnualReport(loadReport('aapl'), new USGAAPParser());

    expect(report).toEqual(expect.objectContaining({
      currency: 'USD',
      period: {
        id: 'i4a4fb50fc2db4070adb20304175890ef_D20210926-20220924',
        startDate: '2021-09-26',
        endDate: '2022-09-24'
      }
    }));

    expect(report.incomeStatement).toEqual(expect.objectContaining<Partial<IncomeStatement>>({
      revenue: 394_328_000_000,
      costOfSales: 223_546_000_000,
      grossProfitLoss: 170_782_000_000,
      profitLoss: 99_803_000_000,
      profitLossBeforeTax: 119_103_000_000,
      profitLossFromOperatingActivities: 119_437_000_000,
      tax: 19_300_000_000,
      interestExpense: 2_931_000_000,
      interestAndDividendIncome: 2_825_000_000,
      depreciationAmortization: 11_104_000_000,
      calculatedEBITDA: 130_313_000_000,
      calculatedEBIT: 119_209_000_000
    }));

    expect(report.balance).toEqual(expect.objectContaining<Balance>({
      date: '2022-09-24',
      // These should be the same and balance.
      assets: {
        total: 352_755_000_000,
        noncurrentAssets: {
          total: 217_350_000_000,
          intangibleAssets: {
            total: 0
          },
          tangibleAssets: {
            total: 42_117_000_000,
          },
          financialAssets: {
            total: 0
          }
        },
        currentAssets: {
          total: 135_405_000_000,
          inventories: {
            total: 4_946_000_000
          },
          cashAndCashEquivalents: 23_646_000_000,
          shorttermReceivables: {
            total: 28_184_000_000
          },
          shorttermInvestments: {}
        }
      },
      liabilitiesAndEquity: {
        total: 352_755_000_000,
        equity: {
          total: 50_672_000_000,
        },
        provisions: {
          total: 0
        },
        liabilitiesOtherThanProvisions: {
          total: 302_083_000_000,
          shorttermLiabilities: {
            total: 153_982_000_000,
          },
          longtermLiabilities: {
            total: 148_101_000_000,
          }
        }
      }
    }));
  });
});