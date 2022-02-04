import { XMLParser } from 'fast-xml-parser';
import type { XBRLDocument, XbrliXbrl } from './types';

export interface Period {
  id: string;
  startDate: string;
  endDate: string;
}

export interface Instant {
  id: string;
  date: string;
}

export function parseXbrlFile(xmlString: string): XBRLDocument {
  const obj = new XMLParser({
    ignoreAttributes: false,
  }).parse(xmlString);

  return obj as XBRLDocument;
}

export function findPeriods(doc: XbrliXbrl): ({ VAT: string } & Period)[] {
  return doc['xbrli:context']
    .filter(c => !!c['xbrli:period']['xbrli:endDate'])
    .map(c => ({
      VAT: String(c['xbrli:entity']['xbrli:identifier']['#text']),
      id: c['@_id'],
      startDate: c['xbrli:period']['xbrli:startDate'] || '',
      endDate: c['xbrli:period']['xbrli:endDate'] || ''
    }));
}

export function findInstants(doc: XbrliXbrl): Instant[] {
  return doc['xbrli:context']
    .filter(c => !!c['xbrli:period']['xbrli:instant'])
    .map(c => ({
      id: c['@_id'],
      date: c['xbrli:period']['xbrli:instant'] || ''
    }));
}