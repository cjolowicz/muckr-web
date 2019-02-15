// @flow
import navigation, { isNavigationOpen } from "../navigation";
import { openNavigation, closeNavigation } from "../../actions/navigation";

describe("navigation", () => {
  describe("initially", () => {
    it("is closed", () => {
      const state = navigation(undefined, {});
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
