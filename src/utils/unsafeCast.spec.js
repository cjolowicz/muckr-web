// @flow
import unsafeCast from "./unsafeCast";

describe("unsafeCast", () => {
  test.each([[1, "foo", null]])("returns value", arg => {
    expect(unsafeCast(arg)).toBe(arg);
  });
});
