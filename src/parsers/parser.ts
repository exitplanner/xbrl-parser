import type { AnnualReport } from '../types';

export interface Parser<T extends AnnualReport> {
  parseAnnualReport: (xmlString: string) => T;
}