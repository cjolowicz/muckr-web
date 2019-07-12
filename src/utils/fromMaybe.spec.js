// @flow
import fromMaybe from "./fromMaybe";

describe("fromMaybe", () => {
  test.each([[undefined], [null]])(
    "returns default if undefined or null",
    arg => {
      expect(fromMaybe("default", arg)).toBe("default");
    }
  );

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
  ])("returns value", arg => {
    expect(fromMaybe("default", arg)).toBe(arg);
  });
});
