// @flow
import reducer from "./reducers";
import { token } from "./selectors";
import {
  TOKEN,
  GENERIC_ERROR,
  UNAUTHORIZED_ERROR
} from "../../utils/test/fixtures";
import { noop } from "../noop/actions";
import { fetchArtistsFailure } from "../artist/actions";
import {
  fetchTokenRequest,
  fetchTokenSuccess,
  fetchTokenFailure,
  clearToken
} from "./actions";
import type { State } from "./types";

const applyReducer = actions =>
  actions.reduce(reducer, ((undefined: any): State));

describe("token", () => {
  describe("initially", () => {
    const state = applyReducer([noop()]);

    it("has no token", () => {
      expect(token(state)).toBe(null);
    });
  });

  describe("FETCH_TOKEN_REQUEST", () => {
    const state = applyReducer([fetchTokenRequest("john", "secret")]);

    it("has no token", () => {
      expect(token(state)).toBe(null);
    });
  });

  describe("FETCH_TOKEN_SUCCESS", () => {
    const state = applyReducer([
      fetchTokenRequest("john", "secret"),
      fetchTokenSuccess(TOKEN)
    ]);

    it("sets token", () => {
      expect(token(state)).toEqual(TOKEN);
    });
  });

  describe("FETCH_TOKEN_FAILURE", () => {
    const state = applyReducer([
      fetchTokenRequest("john", "secret"),
      fetchTokenFailure(GENERIC_ERROR)
    ]);

    it("has no token", () => {
      expect(token(state)).toBe(null);
    });
  });

  describe("CLEAR_TOKEN", () => {
    const state = applyReducer([
      fetchTokenRequest("john", "secret"),
      fetchTokenSuccess(TOKEN),
      clearToken()
    ]);

    it("clears token", () => {
      expect(token(state)).toBeNull();
    });
  });

  describe("FETCH_ARTISTS_FAILURE", () => {
    describe("authorization failure", () => {
      const state = applyReducer([
        fetchTokenSuccess(TOKEN),
        fetchArtistsFailure(UNAUTHORIZED_ERROR)
      ]);

      it("clears token", () => {
        expect(token(state)).toBeNull();
      });
    });

    describe("generic error", () => {
      const state = applyReducer([
        fetchTokenSuccess(TOKEN),
        fetchArtistsFailure(GENERIC_ERROR)
      ]);

      it("preserves token", () => {
        expect(token(state)).toEqual(TOKEN);
      });
    });
  });
});
