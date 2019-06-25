// @flow
import rootReducer, {
  isCreateDialogOpen,
  isUpdateDialogOpen,
  getDialogArtist,
  isMessageOpen,
  getMessage,
  isNavigationOpen,
  isFetchingToken,
  getToken,
  getTokenError,
  isCreatingUser,
  getUser,
  getUserError,
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

  describe("isCreateDialogOpen", () => {
    it("is false", () => {
      expect(isCreateDialogOpen(state)).toBe(false);
    });
  });

  describe("isUpdateDialogOpen", () => {
    it("is false", () => {
      expect(isUpdateDialogOpen(state)).toBe(false);
    });
  });

  describe("getDialogArtist", () => {
    it("returns no artist", () => {
      expect(getDialogArtist(state)).toBeNull();
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

  describe("isFetchingArtists", () => {
    it("is false", () => {
      expect(isFetchingArtists(state)).toBe(false);
    });
  });

  describe("getArtists", () => {
    it("is null", () => {
      expect(getArtists(state)).toHaveLength(0);
    });
  });

  describe("getArtistsError", () => {
    it("is null", () => {
      expect(getArtistsError(state)).toBeNull();
    });
  });
});
