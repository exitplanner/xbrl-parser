export { parseXbrlFile } from './xbrl';
export { default as CvrParser } from './parsers/cvr';
import type { Parser } from './parsers/parser';

/**
 * Extract an annual report from the given xml file (XBRL). Expects to be given
 * an appropriate parser to use.
 */
export function parseAnnualReport(xmlString: string, parser: Parser) {
  // It might be possible to read the XML scheme, find the right taxonomy, and
  // automatically determine the parser. But this is kind of irrelevant right
  // now since it's only (half) working for Danish annual reports.
  return parser.parseAnnualReport(xmlString);
}
