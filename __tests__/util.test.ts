import { removeUndefinedValues } from '../src/util.js';

describe('removeUndefinedValues', () => {
  it('should remove undefined values on a single level object', () => {
    const input = {
      a: 1,
      b: undefined,
      d: undefined,
    };

    const expectedOutput = { a: 1 };
    expect(removeUndefinedValues(input)).toEqual(expectedOutput);
  });

  it('should remove undefined values in a nested object', () => {
    const input = {
      a: 1,
      b: {
        c: 2,
        d: undefined,
      },
      e: undefined,
    };

    const expectedOutput = {
      a: 1,
      b: {
        c: 2,
      },
    };

    expect(removeUndefinedValues(input)).toEqual(expectedOutput);
  });

  it('should not modify the original object', () => {
    const input = {
      a: 1,
      b: undefined,
    };

    const inputCopy = { ...input };
    removeUndefinedValues(input);

    expect(input).toEqual(inputCopy);
  });

  it('should remove undefined values in a deeply nested object', () => {
    const input = {
      a: {
        b: {
          c: 1,
          d: {
            e: undefined,
            f: 2,
          },
        },
        g: undefined,
      },
      h: 3,
    };

    const expectedOutput = {
      a: {
        b: {
          c: 1,
          d: {
            f: 2,
          },
        },
      },
      h: 3,
    };

    expect(removeUndefinedValues(input)).toEqual(expectedOutput);
  });
});