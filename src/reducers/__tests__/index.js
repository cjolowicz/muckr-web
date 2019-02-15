// @flow
import rootReducer, { isNavigationOpen } from "..";

describe("initial state", () => {
  const state = rootReducer(undefined, {});

  describe("rootReducer", () => {
    it("returns defined state", () => {
      expect(state).not.toBeUndefined();
    });
  });

  describe("isNavigationOpen", () => {
    it("is false", () => {
      expect(isNavigationOpen(state)).toBe(false);
    });
  });
});
