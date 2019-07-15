// @flow
import reducer from "./reducers";
import {
  createArtistRequest,
  createArtistSuccess,
  createArtistFailure,
  removeArtistRequest,
  removeArtistSuccess,
  removeArtistFailure,
  updateArtistRequest,
  updateArtistSuccess,
  updateArtistFailure,
  fetchArtistsRequest,
  fetchArtistsSuccess,
  fetchArtistsFailure
} from "../artist/actions";
import { noop } from "../noop/actions";
import {
  TOKEN,
  ARTISTS,
  ARTIST,
  GENERIC_ERROR
} from "../../utils/test/fixtures";

describe("spinner", () => {
  describe("initially", () => {
    const state = reducer(undefined, noop());

    it("does not spin", () => {
      expect(state).toBe(false);
    });
  });

  describe.each([
    [fetchArtistsRequest(TOKEN)],
    [createArtistRequest(TOKEN, ARTIST.name)],
    [updateArtistRequest(TOKEN, ARTIST)],
    [removeArtistRequest(TOKEN, ARTIST.id)]
  ])("on request", action => {
    const state = reducer(undefined, action);

    it("starts", () => {
      expect(state).toBe(true);
    });
  });

  describe.each([
    [[fetchArtistsRequest(TOKEN), fetchArtistsFailure(GENERIC_ERROR)]],
    [
      [
        createArtistRequest(TOKEN, ARTIST.name),
        createArtistFailure(GENERIC_ERROR)
      ]
    ],
    [[updateArtistRequest(TOKEN, ARTIST), updateArtistFailure(GENERIC_ERROR)]],
    [[updateArtistRequest(TOKEN, ARTIST), removeArtistFailure(GENERIC_ERROR)]]
  ])("on failure", actions => {
    const state = actions.reduce(reducer, undefined);

    it("stops", () => {
      expect(state).toBe(false);
    });
  });

  describe.each([
    [[fetchArtistsRequest(TOKEN), fetchArtistsSuccess(ARTISTS)]],
    [[createArtistRequest(TOKEN, ARTIST.name), createArtistSuccess(ARTIST)]],
    [[updateArtistRequest(TOKEN, ARTIST), updateArtistSuccess(ARTIST)]],
    [[updateArtistRequest(TOKEN, ARTIST), removeArtistSuccess(ARTIST.id)]]
  ])("on failure", actions => {
    const state = actions.reduce(reducer, undefined);

    it("stops", () => {
      expect(state).toBe(false);
    });
  });
});
