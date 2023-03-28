import { parseXbrlFile } from '../src/index.js';
import { XbrliXbrlDK } from '../src/xbrl/types.js';
import { loadReport } from './util.js';

describe('xbrl', () => {
  it('should parse a XBRL file and return raw document', () => {
    const xbrl = parseXbrlFile<XbrliXbrlDK>(loadReport('report1'));
    expect(xbrl['?xml']).toBeTruthy();
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
    expect(xbrl['xbrli:xbrl']?.['fsa:ProfitLoss']).toBeTruthy();
  });

  it('should parse a XBRL file with different namespaces', () => {
    const xbrl = parseXbrlFile<XbrliXbrlDK>(loadReport('report3'));
    expect(xbrl['?xml']).toBeTruthy();
    expect(xbrl['xbrli:xbrl']?.['xbrli:context']).toContainEqual(expect.objectContaining({
      'xbrli:entity': {
        'xbrli:identifier': {
          '#text': 38343521,
          '@_scheme': 'http://www.dcca.dk/cvr'
        }
      },
      'xbrli:period': {
        'xbrli:startDate': '2020-01-01',
        'xbrli:endDate': '2020-12-31'
      },
      '@_id': 'c11'
    }));
    expect(xbrl['xbrli:xbrl']?.['fsa:ProfitLoss']).toBeTruthy();
  });
});