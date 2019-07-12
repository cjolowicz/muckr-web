// @flow
import reducer from "../reducers";
import { token } from "../selectors";
import {
  TOKEN,
  GENERIC_ERROR,
  UNAUTHORIZED_ERROR
} from "../../../utils/test/fixtures";
import { noop } from "../../noop/actions";
import { fetchArtistsFailure } from "../../artist/actions";
import {
  fetchTokenRequest,
  fetchTokenSuccess,
  fetchTokenFailure,
  clearToken
} from "../actions";

describe("token", () => {
  describe("initially", () => {
    const state = reducer(undefined, noop());

    it("has no token", () => {
      expect(token(state)).toBe(null);
    });
  });

  describe("FETCH_TOKEN_REQUEST", () => {
    const state = reducer(undefined, fetchTokenRequest("john", "secret"));

    it("has no token", () => {
      expect(token(state)).toBe(null);
    });
  });

  describe("FETCH_TOKEN_SUCCESS", () => {
    const stateBefore = reducer(undefined, fetchTokenRequest("john", "secret"));
    const state = reducer(stateBefore, fetchTokenSuccess(TOKEN));

    it("sets token", () => {
      expect(token(state)).toEqual(TOKEN);
    });
  });

  describe("FETCH_TOKEN_FAILURE", () => {
    const stateBefore = reducer(undefined, fetchTokenRequest("john", "secret"));
    const state = reducer(stateBefore, fetchTokenFailure(GENERIC_ERROR));

    it("has no token", () => {
      expect(token(state)).toBe(null);
    });
  });

  describe("CLEAR_TOKEN", () => {
    let state;
    state = reducer(undefined, fetchTokenRequest("john", "secret"));
    state = reducer(state, fetchTokenSuccess(TOKEN));
    state = reducer(state, clearToken());

    it("clears token", () => {
      expect(token(state)).toBeNull();
    });
  });

  describe("FETCH_ARTISTS_FAILURE", () => {
    describe("authorization failure", () => {
      let state;
      state = reducer(state, fetchTokenSuccess(TOKEN));
      state = reducer(state, fetchArtistsFailure(UNAUTHORIZED_ERROR));

      it("clears token", () => {
        expect(token(state)).toBeNull();
      });
    });

    describe("generic error", () => {
      let state;
      state = reducer(state, fetchTokenSuccess(TOKEN));
      state = reducer(state, fetchArtistsFailure(GENERIC_ERROR));

      it("preserves token", () => {
        expect(token(state)).toEqual(TOKEN);
      });
    });
  });
});
