import fs from 'fs';
import path from 'path';

export function loadReport(num: number): string {
  const file = path.join(__dirname, './__fixtures__', `report${num}.xml`);
  return fs.readFileSync(file, 'utf-8');
}
