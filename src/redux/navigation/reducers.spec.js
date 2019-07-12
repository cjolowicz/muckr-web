// @flow
import navigation from "./reducers";
import { open } from "./selectors";
import { openNavigation, closeNavigation } from "./actions";
import { noop } from "../noop/actions";

describe("navigation", () => {
  describe("initially", () => {
    it("is closed", () => {
      const state = navigation(undefined, noop());
      expect(open(state)).toBe(false);
    });
  });

  describe("openNavigation", () => {
    test.each([[false], [true]])("is open", open$ => {
      const state = navigation({ open: open$ }, openNavigation());
      expect(open(state)).toBe(true);
    });
  });

  describe("closeNavigation", () => {
    test.each([[false], [true]])("is closed", open$ => {
      const state = navigation({ open: open$ }, closeNavigation());
      expect(open(state)).toBe(false);
    });
  });
});
