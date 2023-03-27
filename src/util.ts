export function ensureArray<T>(val: T | T[] | undefined): T[] {
  return Array.isArray(val) ? val : val ? [val] : [];
}

type RecursiveObject<T> = {
  [key: string]: number | undefined | RecursiveObject<T>;
};

export function removeUndefinedValues<T>(obj: RecursiveObject<T>): T {
  const newObj: RecursiveObject<T> = {};

  for (const key of Object.keys(obj)) {
    const val = obj[key];
    if (typeof val === 'object') {
      newObj[key] = removeUndefinedValues(val) as RecursiveObject<T>;
    } else if (val !== undefined) {
      newObj[key] = obj[key];
    }
  }

  return newObj as T;
}
