// @flow
import token, { isFetchingToken, getToken, getTokenError } from "../token";
import {
  TOKEN,
  GENERIC_ERROR,
  UNAUTHORIZED_ERROR
} from "../../../test/fixtures";
import { noop } from "../../noop/actions";
import { fetchArtistsFailure } from "../../artist/actions";
import {
  fetchTokenRequest,
  fetchTokenSuccess,
  fetchTokenFailure,
  clearToken
} from "../../actions/token";

describe("token", () => {
  describe("initially", () => {
    const state = token(undefined, noop());

    it("is not fetching", () => {
      expect(isFetchingToken(state)).toBe(false);
    });

    it("has no token", () => {
      expect(getToken(state)).toBe(null);
    });

    it("has no error", () => {
      expect(getTokenError(state)).toBe(null);
    });
  });

  describe("FETCH_TOKEN_REQUEST", () => {
    const state = token(undefined, fetchTokenRequest("john", "secret"));

    it("is fetching", () => {
      expect(isFetchingToken(state)).toBe(true);
    });
  });

  describe("FETCH_TOKEN_SUCCESS", () => {
    const stateBefore = token(undefined, fetchTokenRequest("john", "secret"));
    const state = token(stateBefore, fetchTokenSuccess(TOKEN));

    it("is not fetching", () => {
      expect(isFetchingToken(state)).toBe(false);
    });

    it("sets token", () => {
      expect(getToken(state)).toEqual(TOKEN);
    });
  });

  describe("FETCH_TOKEN_FAILURE", () => {
    const stateBefore = token(undefined, fetchTokenRequest("john", "secret"));
    const state = token(stateBefore, fetchTokenFailure(GENERIC_ERROR));

    it("is not fetching", () => {
      expect(isFetchingToken(state)).toBe(false);
    });
  });

  describe("CLEAR_TOKEN", () => {
    let state;
    state = token(undefined, fetchTokenRequest("john", "secret"));
    state = token(state, fetchTokenSuccess(TOKEN));
    state = token(state, clearToken());

    it("clears token", () => {
      expect(getToken(state)).toBeNull();
    });
  });

  describe("FETCH_ARTISTS_FAILURE", () => {
    describe("authorization failure", () => {
      let state;
      state = token(state, fetchTokenSuccess(TOKEN));
      state = token(state, fetchArtistsFailure(UNAUTHORIZED_ERROR));

      it("clears token", () => {
        expect(getToken(state)).toBeNull();
      });
    });

    describe("generic error", () => {
      let state;
      state = token(state, fetchTokenSuccess(TOKEN));
      state = token(state, fetchArtistsFailure(GENERIC_ERROR));

      it("preserves token", () => {
        expect(getToken(state)).toEqual(TOKEN);
      });
    });
  });
});
