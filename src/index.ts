import { calculateKeyFigures } from './keyfigures.js';
import type { AnnualReport } from './types';
import type { Parser } from './parsers/parser';

/**
 * Extract an annual report from the given xml file (XBRL). Expects to be given
 * an appropriate parser to use.
 */
export function parseAnnualReport<T extends AnnualReport>(xmlString: string, parser: Parser<T>): T {
  // It might be possible to read the XML scheme, find the right taxonomy, and
  // automatically determine the parser. But this is kind of irrelevant right
  // now since it's only (half) working for Danish annual reports.
  const report = parser.parseAnnualReport(xmlString);
  report.keyFigures = calculateKeyFigures(report);
  return report;
}

// Other sub-module exports
export { parseXbrlFile } from './xbrl/index.js';
export { calculateKeyFigures } from './keyfigures.js';
export { default as CvrParser } from './parsers/cvr.js';
export { default as USGAAPParser } from './parsers/usgaap.js';
export { AnnualReport, AnnualReportDK, Balance, IncomeStatement, KeyFigures } from './types.js';
export { Parser } from './parsers/parser.js';