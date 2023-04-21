import type { AnnualReport, KeyFigures } from './types';

export function calculateKeyFigures(report: AnnualReport): KeyFigures {
  return {
    currentRatio: (report.balance.assets.currentAssets.total || 0) / (report.balance.liabilitiesAndEquity.liabilitiesOtherThanProvisions.shorttermLiabilities.total || 0),
    equityRatio: (report.balance.liabilitiesAndEquity.equity.total || 0) / report.balance.assets.total,
    operatingReturnOnAssets: report.incomeStatement.profitLossFromOperatingActivities / report.balance.assets.total
  };
}
