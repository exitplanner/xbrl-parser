import fs from 'fs';
import path from 'path';

export function loadReport(name: string): string {
  const file = path.join(__dirname, './__fixtures__', `${name}.xml`);
  return fs.readFileSync(file, 'utf-8');
}
