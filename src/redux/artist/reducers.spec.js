// @flow
import artists from "./reducers";
import { pending } from "./selectors";
import {
  TOKEN,
  ARTIST,
  ARTISTS,
  GENERIC_ERROR
} from "../../utils/test/fixtures";
import {
  createArtistRequest,
  createArtistSuccess,
  removeArtistRequest,
  removeArtistSuccess,
  removeArtistFailure,
  updateArtistRequest,
  updateArtistSuccess,
  updateArtistFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess,
  fetchArtistsFailure
} from "./actions";
import { noop } from "../noop/actions";

describe("artists", () => {
  describe("initially", () => {
    const state = artists(undefined, noop());

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("fetchArtistsRequest", () => {
    const state = artists(undefined, fetchArtistsRequest(TOKEN));

    it("is fetching", () => {
      expect(pending(state)).toBe(true);
    });
  });

  describe("fetchArtistsSuccess", () => {
    const stateBefore = artists(undefined, fetchArtistsRequest(TOKEN));
    const state = artists(stateBefore, fetchArtistsSuccess(ARTISTS));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("fetchArtistsFailure", () => {
    const stateBefore = artists(undefined, fetchArtistsRequest(TOKEN));
    const state = artists(stateBefore, fetchArtistsFailure(GENERIC_ERROR));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("createArtistSuccess", () => {
    const { name } = ARTIST;
    const stateBefore = artists(undefined, createArtistRequest(TOKEN, name));
    const state = artists(stateBefore, createArtistSuccess(ARTIST));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("createArtistSuccess after fetch", () => {
    const stateBefore = artists(undefined, fetchArtistsSuccess([]));
    const state = artists(stateBefore, createArtistSuccess(ARTIST));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("removeArtistSuccess", () => {
    const { id } = ARTIST;
    const stateBefore = artists(undefined, removeArtistRequest(TOKEN, id));
    const state = artists(stateBefore, removeArtistSuccess(id));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("removeArtistSuccess after fetch", () => {
    const { id } = ARTIST;
    const stateBefore = artists(undefined, fetchArtistsSuccess([ARTIST]));
    const state = artists(stateBefore, removeArtistSuccess(id));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("removeArtistFailure", () => {
    const { id } = ARTIST;
    const stateBefore = artists(undefined, removeArtistRequest(TOKEN, id));
    const state = artists(stateBefore, removeArtistFailure(GENERIC_ERROR));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("updateArtistSuccess", () => {
    const stateBefore = artists(undefined, updateArtistRequest(TOKEN, ARTIST));
    const state = artists(stateBefore, updateArtistSuccess(ARTIST));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("updateArtistSuccess after fetch", () => {
    const stateBefore = artists(undefined, fetchArtistsSuccess(ARTISTS));
    const state = artists(stateBefore, updateArtistSuccess(ARTIST));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });

  describe("updateArtistFailure", () => {
    const stateBefore = artists(undefined, updateArtistRequest(TOKEN, ARTIST));
    const state = artists(stateBefore, updateArtistFailure(GENERIC_ERROR));

    it("is not fetching", () => {
      expect(pending(state)).toBe(false);
    });
  });
});
