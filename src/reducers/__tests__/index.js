// @flow
import rootReducer, {
  isNavigationOpen,
  isFetchingToken,
  getToken,
  getTokenError
} from "..";

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

  describe("isFetchingToken", () => {
    it("is false", () => {
      expect(isFetchingToken(state)).toBe(false);
    });
  });

  describe("getToken", () => {
    it("is null", () => {
      expect(getToken(state)).toBeNull();
    });
  });

  describe("getTokenError", () => {
    it("is null", () => {
      expect(getTokenError(state)).toBeNull();
    });
  });
});
