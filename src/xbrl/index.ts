import { XMLParser } from 'fast-xml-parser';
import { isNodeWithNamespace } from './types.js';
import type { XBRLDocument, XbrliXbrl } from './types';

type Json = string | number | boolean | null | Json[] | { [key: string]: Json };

export interface Period {
  id: string;
  startDate: string;
  endDate: string;
  scenario?: string;
}

export interface Instant {
  id: string;
  date: string;
  scenario?: string;
}

export function parseXbrlFile<T extends XbrliXbrl>(xmlString: string): XBRLDocument<T> {
  const obj = new XMLParser({
    ignoreAttributes: false,
  }).parse(xmlString);

  const xbrliRootKey = Object.keys(obj).find(k => k.includes('xbrl'));
  if (!xbrliRootKey) {
    throw new Error('xbrlRootNotFound: Could not find xbrl root in the file');
  }

  obj['xbrli:xbrl'] = transformNamespaces(obj[xbrliRootKey]);
  return fixTextNodes(obj as XBRLDocument<T>);
}

function fixTextNodes <T extends XbrliXbrl>(obj: XBRLDocument<T>): XBRLDocument<T> {
  if (obj['xbrli:xbrl'] && obj['xbrli:xbrl']['xbrli:context']) {
    obj['xbrli:xbrl']['xbrli:context'].forEach(c => {
      if (c['xbrli:period']['xbrli:startDate'] && isNodeWithNamespace(c['xbrli:period']['xbrli:startDate'])) {
        c['xbrli:period']['xbrli:startDate'] = c['xbrli:period']['xbrli:startDate']['#text'];
      }
      if (c['xbrli:period']['xbrli:endDate'] && isNodeWithNamespace(c['xbrli:period']['xbrli:endDate'])) {
        c['xbrli:period']['xbrli:endDate'] = c['xbrli:period']['xbrli:endDate']['#text'];
      }
      if (c['xbrli:period']['xbrli:instant'] && isNodeWithNamespace(c['xbrli:period']['xbrli:instant'])) {
        c['xbrli:period']['xbrli:instant'] = c['xbrli:period']['xbrli:instant']['#text'];
      }
    });
  }
  if (obj['xbrli:xbrl'] && obj['xbrli:xbrl']['xbrli:unit']) {
    if (!Array.isArray(obj['xbrli:xbrl']['xbrli:unit'])) {
      obj['xbrli:xbrl']['xbrli:unit'] = [obj['xbrli:xbrl']['xbrli:unit']];
    }
    obj['xbrli:xbrl']['xbrli:unit'].map(u => {
      if (u['xbrli:measure'] && isNodeWithNamespace(u['xbrli:measure'])) {
        u['xbrli:measure'] = u['xbrli:measure']['#text'];
      }
    });
  }
  return obj;
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
    .filter(c => !!c['xbrli:period']['xbrli:endDate'] && !!c['xbrli:period']['xbrli:startDate'])
    .map(c => ({
      VAT: String(c['xbrli:entity']['xbrli:identifier']['#text']),
      id: c['@_id'],
      startDate: c['xbrli:period']['xbrli:startDate'] || '',
      endDate: c['xbrli:period']['xbrli:endDate'] || '',
      scenario: c['xbrli:scenario']?.['xbrldi:explicitMember']?.['#text']
    }));
}

export function findPeriodsWithDates(doc: XbrliXbrl, startDate: string, endDate: string): Period[] {
  return findPeriods(doc).filter(period => period.startDate === startDate && period.endDate === endDate);
}

export function findInstants(doc: XbrliXbrl): Instant[] {
  return doc['xbrli:context']
    .filter(c => !!c['xbrli:period']['xbrli:instant'])
    .map(c => ({
      id: c['@_id'],
      date: c['xbrli:period']['xbrli:instant'] || '',
      scenario: c['xbrli:scenario']?.['xbrldi:explicitMember']?.['#text']
    }));
}

export function findPrimaryCurrency(doc: XbrliXbrl): string {
  const unit = doc['xbrli:unit']
    .filter(u => u['xbrli:measure']?.toLowerCase().startsWith('iso4217:'))[0];

  if (!unit) {
    throw new Error('Cannot find currency');
  }

  return unit['xbrli:measure'].split(':')[1];
}