// @flow
import artists, {
  isFetchingArtists,
  getArtists,
  getArtistsError
} from "../artists";
import { TOKEN, ARTISTS, GENERIC_ERROR } from "../../test/fixtures";
import {
  fetchArtistsRequest,
  fetchArtistsSuccess,
  fetchArtistsFailure
} from "../../actions/fetchArtists";
import { noop } from "../../actions/noop";

describe("artists", () => {
  describe("initially", () => {
    const state = artists(undefined, noop());

    it("is not fetching", () => {
      expect(isFetchingArtists(state)).toBe(false);
    });

    it("has no artists", () => {
      expect(getArtists(state)).toBe(null);
    });

    it("has no error", () => {
      expect(getArtistsError(state)).toBe(null);
    });
  });

  describe("fetchArtistsRequest", () => {
    const state = artists(undefined, fetchArtistsRequest(TOKEN));

    it("is fetching", () => {
      expect(isFetchingArtists(state)).toBe(true);
    });
  });

  describe("fetchArtistsSuccess", () => {
    const stateBefore = artists(undefined, fetchArtistsRequest(TOKEN));
    const state = artists(stateBefore, fetchArtistsSuccess(ARTISTS));

    it("is not fetching", () => {
      expect(isFetchingArtists(state)).toBe(false);
    });
  });

  describe("fetchArtistsFailure", () => {
    const stateBefore = artists(undefined, fetchArtistsRequest(TOKEN));
    const state = artists(stateBefore, fetchArtistsFailure(GENERIC_ERROR));

    it("is not fetching", () => {
      expect(isFetchingArtists(state)).toBe(false);
    });
  });
});
