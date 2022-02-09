import { XMLParser } from 'fast-xml-parser';
import type { XBRLDocument, XbrliXbrl } from './types';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

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

  const xbrliRootKey = Object.keys(obj).find(k => k.includes('xbrl'));
  if (!xbrliRootKey) {
    throw new Error('xbrlRootNotFound: Could not find xbrl root in the file');
  }

  obj['xbrli:xbrl'] = transformNamespaces(obj[xbrliRootKey]);
  return obj as XBRLDocument;
}

function transformNamespaces(obj: { [key: string]: Json }): unknown {
  // See XBRL spec notes in the readme for more info on this cleaning

  const namespaces = Object.entries(obj)
    .filter(([k]) => k.startsWith('@_xmlns')) as [string, string][];

  // Namespaces to update
  const namespaceMapping: Record<string, string> = {};

  // namespaces is a list of pairs like ['@_xmlns:xbrli', 'http://www.xbrl.org/2003/instance']
  for (const [xmlns, namespaceUrl] of namespaces) {
    // Might look like xmlns:xbrli or simply xmlns (without colon)
    const name = xmlns.split(':')[1] || '';

    // Not all namespaces are explicitly checked

    // The instance objects should be prefixed xbrli
    if (namespaceUrl === 'http://www.xbrl.org/2003/instance' && name !== 'xbrli') {
      namespaceMapping[name] = 'xbrli';
    }

    // Danish-specific namespaces match xbrl.dcca.dk/[thenamespacename]
    // Matches e.g. "fsa" and checks if the namespace already has that name.
    const daMatches = namespaceUrl.match(/xbrl\.dcca\.dk\/(\w+)/i);
    if (daMatches && daMatches[1] && daMatches[1] !== name) {
      namespaceMapping[name] = daMatches[1];
    }
  }

  if (Object.keys(namespaceMapping).length) {
    return recursiveNamespaceTransform(obj as Json, namespaceMapping);
  }

  return obj;
}

function isLeaf(obj: Json): boolean {
  return (obj === null || typeof obj === 'string' || typeof obj === 'number' || typeof obj === 'boolean');
}

function recursiveNamespaceTransform(obj: Json, namespaceMapping: Record<string, string>): Json {
  if (Array.isArray(obj)) {
    return obj.map(v => recursiveNamespaceTransform(v, namespaceMapping));
  }

  if (isLeaf(obj)) {
    return obj;
  }

  const newObj = Object.entries(obj as Record<string, Json>)
    .reduce<Record<string, Json>>((newObj, [key, value]) => {
      // Don't transform #text and attributes
      if (key === '#text' || key.startsWith('@_')) {
        newObj[key] = value;
        return newObj;
      }

      // E.g. a:ProfitLoss might be renamed to fsa:ProfitLoss
      const split = key.split(':');
      let namespace = split[0];
      let name = split[1] || '';
      // Handle special case for empty namespace
      if (name === '') {
        name = namespace;
        namespace = '';
      }

      const newNamespace = namespaceMapping[namespace] ? namespaceMapping[namespace] : namespace;
      newObj[`${newNamespace}:${name}`] = recursiveNamespaceTransform(value, namespaceMapping);
      return newObj;
    }, {});
  return newObj;
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