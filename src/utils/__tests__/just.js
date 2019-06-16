// @flow
import just from "../just";

describe("just", () => {
  test.each([[undefined], [null]])("throws if undefined or null", arg => {
    expect(() => just(arg)).toThrow(Error);
  });

  test.each([
    [false],
    [true],
    [0],
    [1],
    [2],
    [""],
    ["foo"],
    [[]],
    [["foo"]],
    [{}],
    [{ foo: "foo" }],
    [() => null],
    [() => undefined]
  ])("returns argument", arg => {
    expect(just(arg)).toBe(arg);
  });
});
