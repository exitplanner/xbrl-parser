import type { Parser } from './parsers/parser';
import { AnnualReport } from './types.js';

/**
 * Extract an annual report from the given xml file (XBRL). Expects to be given
 * an appropriate parser to use.
 */
export function parseAnnualReport<T extends AnnualReport>(xmlString: string, parser: Parser<T>) {
  // It might be possible to read the XML scheme, find the right taxonomy, and
  // automatically determine the parser. But this is kind of irrelevant right
  // now since it's only (half) working for Danish annual reports.
  return parser.parseAnnualReport(xmlString);
}

// Other sub-module exports
export { parseXbrlFile } from './xbrl/index.js';
export { default as CvrParser } from './parsers/cvr.js';
export { default as USGAAPParser } from './parsers/usgaap.js';
export { AnnualReport, AnnualReportDK, Balance, IncomeStatement } from './types.js';
export { Parser } from './parsers/parser.js';