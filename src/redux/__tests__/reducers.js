// @flow
import rootReducer from "../reducers";
import {
  dialogType,
  dialogArtist,
  messageOpen,
  message,
  isNavigationOpen,
  isFetchingToken,
  getToken,
  getTokenError,
  isCreatingUser,
  getUser,
  getUserError,
  artistsPending,
  getArtists
} from "../selectors";
import { NO_ARTIST } from "../dialog/reducers";
import { noop } from "../noop/actions";

describe("initial state", () => {
  const state = rootReducer(undefined, noop());

  describe("rootReducer", () => {
    it("returns defined state", () => {
      expect(state).not.toBeUndefined();
    });
  });

  describe("dialogType", () => {
    it("is null", () => {
      expect(dialogType(state)).toBeNull();
    });
  });

  describe("dialogArtist", () => {
    it("returns no artist", () => {
      expect(dialogArtist(state)).toEqual(NO_ARTIST);
    });
  });

  describe("messageOpen", () => {
    it("is false", () => {
      expect(messageOpen(state)).toBe(false);
    });
  });

  describe("message", () => {
    it("is null", () => {
      expect(message(state)).toBeNull();
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

  describe("isCreatingUser", () => {
    it("is false", () => {
      expect(isCreatingUser(state)).toBe(false);
    });
  });

  describe("getUser", () => {
    it("is null", () => {
      expect(getUser(state)).toBeNull();
    });
  });

  describe("getUserError", () => {
    it("is null", () => {
      expect(getUserError(state)).toBeNull();
    });
  });

  describe("artistsPending", () => {
    it("is false", () => {
      expect(artistsPending(state)).toBe(false);
    });
  });

  describe("getArtists", () => {
    it("is null", () => {
      expect(getArtists(state)).toHaveLength(0);
    });
  });
});
