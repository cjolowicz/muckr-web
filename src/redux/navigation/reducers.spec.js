// @flow
import reducer from "./reducers";
import { open } from "./selectors";
import { openNavigation, closeNavigation } from "./actions";
import { noop } from "../noop/actions";

describe("reducer", () => {
  describe("initially", () => {
    it("is closed", () => {
      const state = reducer(undefined, noop());
      expect(open(state)).toBe(false);
    });
  });

  describe("openNavigation", () => {
    test.each([[false], [true]])("is open", open$ => {
      const state = reducer({ open: open$ }, openNavigation());
      expect(open(state)).toBe(true);
    });
  });

  describe("closeNavigation", () => {
    test.each([[false], [true]])("is closed", open$ => {
      const state = reducer({ open: open$ }, closeNavigation());
      expect(open(state)).toBe(false);
    });
  });
});
