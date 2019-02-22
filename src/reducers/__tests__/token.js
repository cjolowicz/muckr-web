// @flow
import token, { isFetchingToken, getToken, getTokenError } from "../token";
import { TOKEN } from "../../test/fixtures";
import { noop } from "../../actions/noop";
import {
  fetchTokenRequest,
  fetchTokenSuccess,
  fetchTokenFailure
} from "../../actions/fetchToken";

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
  });

  describe("FETCH_TOKEN_FAILURE", () => {
    const stateBefore = token(undefined, fetchTokenRequest("john", "secret"));
    const state = token(stateBefore, fetchTokenFailure(new Error("fail")));

    it("is not fetching", () => {
      expect(isFetchingToken(state)).toBe(false);
    });
  });
});
