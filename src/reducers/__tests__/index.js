// @flow
import rootReducer, {
  isMessageOpen,
  getMessage,
  isFetchingToken,
  getToken,
  getTokenError,
  isFetchingArtists,
  getArtists,
  getArtistsError
} from "..";
import { noop } from "../../actions/noop";

describe("initial state", () => {
  const state = rootReducer(undefined, noop());

  describe("rootReducer", () => {
    it("returns defined state", () => {
      expect(state).not.toBeUndefined();
    });
  });

  describe("isMessageOpen", () => {
    it("is false", () => {
      expect(isMessageOpen(state)).toBe(false);
    });
  });

  describe("getMessage", () => {
    it("is null", () => {
      expect(getMessage(state)).toBeNull();
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

  describe("isFetchingArtists", () => {
    it("is false", () => {
      expect(isFetchingArtists(state)).toBe(false);
    });
  });

  describe("getArtists", () => {
    it("is null", () => {
      expect(getArtists(state)).toBeNull();
    });
  });

  describe("getArtistsError", () => {
    it("is null", () => {
      expect(getArtistsError(state)).toBeNull();
    });
  });
});
