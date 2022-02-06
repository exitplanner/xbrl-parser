import fs from 'fs';
import path from 'path';
import { parseXbrlFile } from '../src/index.js';

describe('xbrl', () => {
  let xmlString: string;

  beforeAll(async () => {
    const file = path.join(__dirname, './__fixtures__', 'report1.xml');
    xmlString = fs.readFileSync(file, 'utf-8');
  });

  it('should parse a XBRL file and return raw document', () => {
    const xbrl = parseXbrlFile(xmlString);
    expect(xbrl['xbrli:xbrl']?.['xbrli:context']).toContainEqual(expect.objectContaining({
      'xbrli:entity': {
        'xbrli:identifier': {
          '#text': 65305216,
          '@_scheme': 'http://www.dcca.dk/cvr'
        }
      },
      'xbrli:period': {
        'xbrli:startDate': '2020-01-01',
        'xbrli:endDate': '2020-12-31'
      },
      '@_id': 'ctx1'
    }));
  });
});