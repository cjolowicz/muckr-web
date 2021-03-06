// @flow
import rootReducer from "./reducers";
import {
  dialogType,
  dialogArtist,
  message,
  navigationOpen,
  token,
  user,
  artistsPending,
  artists,
  spinner
} from "./selectors";
import { DIALOG_TYPE_CREATE } from "./dialog/constants";
import { NO_ARTIST } from "./dialog/reducers";
import { noop } from "./noop/actions";

describe("initial state", () => {
  const state = rootReducer(undefined, noop());

  describe("rootReducer", () => {
    it("returns defined state", () => {
      expect(state).not.toBeUndefined();
    });
  });

  describe("dialogType", () => {
    it("is create", () => {
      expect(dialogType(state)).toBe(DIALOG_TYPE_CREATE);
    });
  });

  describe("dialogArtist", () => {
    it("returns no artist", () => {
      expect(dialogArtist(state)).toEqual(NO_ARTIST);
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

  describe("spinner", () => {
    it("is false", () => {
      expect(spinner(state)).toBe(false);
    });
  });
});
