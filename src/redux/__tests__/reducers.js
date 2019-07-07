// @flow
import rootReducer from "../reducers";
import {
  dialogType,
  dialogArtist,
  messageOpen,
  message,
  navigationOpen,
  token,
  user,
  artistsPending,
  artists
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

  describe("navigationOpen", () => {
    it("is false", () => {
      expect(navigationOpen(state)).toBe(false);
    });
  });

  describe("token", () => {
    it("is null", () => {
      expect(token(state)).toBeNull();
    });
  });

  describe("user", () => {
    it("is null", () => {
      expect(user(state)).toBeNull();
    });
  });

  describe("artistsPending", () => {
    it("is false", () => {
      expect(artistsPending(state)).toBe(false);
    });
  });

  describe("artists", () => {
    it("is null", () => {
      expect(artists(state)).toHaveLength(0);
    });
  });
});
