// @flow
import reducer from "./reducers";
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
import type { State } from "./types";

const applyReducer = actions =>
  actions.reduce(reducer, ((undefined: any): State));

describe("reducer", () => {
  describe("initially", () => {
    const state = applyReducer([noop()]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });

  describe("fetchArtistsRequest", () => {
    const state = applyReducer([fetchArtistsRequest(TOKEN)]);

    it("is pending", () => {
      expect(pending(state)).toBe(true);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });

  describe("fetchArtistsSuccess", () => {
    const state = applyReducer([
      fetchArtistsRequest(TOKEN),
      fetchArtistsSuccess(ARTISTS)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has ids", () => {
      expect(state.ids).toEqual(ARTISTS.map(({ id }) => id));
    });
  });

  describe("fetchArtistsFailure", () => {
    const state = applyReducer([
      fetchArtistsRequest(TOKEN),
      fetchArtistsFailure(GENERIC_ERROR)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });

  describe("createArtistSuccess", () => {
    const { name } = ARTIST;
    const state = applyReducer([
      createArtistRequest(TOKEN, name),
      createArtistSuccess(ARTIST)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has ids", () => {
      expect(state.ids).toEqual([ARTIST.id]);
    });
  });

  describe("createArtistSuccess after fetch", () => {
    const state = applyReducer([
      fetchArtistsSuccess([]),
      createArtistSuccess(ARTIST)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has ids", () => {
      expect(state.ids).toEqual([ARTIST.id]);
    });
  });

  describe("removeArtistSuccess", () => {
    const { id } = ARTIST;
    const state = applyReducer([
      removeArtistRequest(TOKEN, id),
      removeArtistSuccess(id)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });

  describe("removeArtistSuccess after fetch", () => {
    const { id } = ARTIST;
    const state = applyReducer([
      fetchArtistsSuccess([ARTIST]),
      removeArtistSuccess(id)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });

  describe("removeArtistFailure", () => {
    const { id } = ARTIST;
    const state = applyReducer([
      fetchArtistsSuccess([ARTIST]),
      removeArtistRequest(TOKEN, id),
      removeArtistFailure(GENERIC_ERROR)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has ids", () => {
      expect(state.ids).toEqual([ARTIST.id]);
    });
  });

  describe("updateArtistSuccess", () => {
    const state = applyReducer([
      updateArtistRequest(TOKEN, ARTIST),
      updateArtistSuccess(ARTIST)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });

  describe("updateArtistSuccess after fetch", () => {
    const state = applyReducer([
      fetchArtistsSuccess(ARTISTS),
      updateArtistSuccess(ARTIST)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has ids", () => {
      expect(state.ids).toEqual(ARTISTS.map(({ id }) => id));
    });
  });

  describe("updateArtistFailure", () => {
    const state = applyReducer([
      updateArtistRequest(TOKEN, ARTIST),
      updateArtistFailure(GENERIC_ERROR)
    ]);

    it("is not pending", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no ids", () => {
      expect(state.ids).toEqual([]);
    });
  });
});
