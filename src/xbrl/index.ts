import { XMLParser } from 'fast-xml-parser';
import { XBRLDocument } from './types';

export function parseXbrlFile(xmlString: string): XBRLDocument {
  const obj = new XMLParser({
    ignoreAttributes: false,
  }).parse(xmlString);

  return obj as XBRLDocument;
}