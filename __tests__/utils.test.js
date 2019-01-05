// @flow
import {
  just,
  fromMaybe,
} from '../src/utils';

describe('just', () => {
  test.each([
    [undefined],
    [null],
  ])('throws if undefined or null', (arg) => {
    expect(() => just(arg)).toThrow(Error);
  });

  test.each([
    [false],
    [true],
    [0],
    [1],
    [2],
    [''],
    ['foo'],
    [[]],
    [['foo']],
    [{}],
    [{ foo: 'foo' }],
    [() => null],
    [() => undefined],
  ])('returns argument', (arg) => {
    expect(just(arg)).toBe(arg);
  });
});

describe('fromMaybe', () => {
  test.each([
    [undefined],
    [null],
  ])('returns default if undefined or null', (arg) => {
    expect(fromMaybe('default', arg)).toBe('default');
  });

  test.each([
    [false],
    [true],
    [0],
    [1],
    [2],
    [''],
    ['foo'],
    [[]],
    [['foo']],
    [{}],
    [{ foo: 'foo' }],
    [() => null],
    [() => undefined],
  ])('returns value', (arg) => {
    expect(fromMaybe('default', arg)).toBe(arg);
  });
});
