export function ensureArray<T>(val: T | T[] | undefined): T[] {
  return Array.isArray(val) ? val : val ? [val] : [];
}
