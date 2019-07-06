// @flow
import navigation from "../reducers";
import { isNavigationOpen } from "../selectors";
import { openNavigation, closeNavigation } from "../actions";
import { noop } from "../../noop/actions";

describe("navigation", () => {
  describe("initially", () => {
    it("is closed", () => {
      const state = navigation(undefined, noop());
      expect(isNavigationOpen(state)).toBe(false);
    });
  });

  describe("openNavigation", () => {
    test.each([[false], [true]])("is open", open => {
      const state = navigation({ open }, openNavigation());
      expect(isNavigationOpen(state)).toBe(true);
    });
  });

  describe("closeNavigation", () => {
    test.each([[false], [true]])("is closed", open => {
      const state = navigation({ open }, closeNavigation());
      expect(isNavigationOpen(state)).toBe(false);
    });
  });
});
