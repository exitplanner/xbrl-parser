import { AnnualReport } from '../types';

export interface Parser {
  parseAnnualReport: (xmlString: string) => AnnualReport;
}