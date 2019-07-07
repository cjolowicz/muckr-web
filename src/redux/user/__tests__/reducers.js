// @flow
import reducer from "../reducers";
import { pending, user, getUserError } from "../selectors";
import { USER, GENERIC_ERROR } from "../../../test/fixtures";
import { noop } from "../../noop/actions";
import {
  createUserRequest,
  createUserSuccess,
  createUserFailure
} from "../actions";

describe("user", () => {
  describe("initially", () => {
    const state = reducer(undefined, noop());

    it("is not creating", () => {
      expect(pending(state)).toBe(false);
    });

    it("has no user", () => {
      expect(user(state)).toBe(null);
    });

    it("has no error", () => {
      expect(getUserError(state)).toBe(null);
    });
  });

  describe("CREATE_USER_REQUEST", () => {
    const state = reducer(undefined, createUserRequest("john", "secret"));

    it("is creating", () => {
      expect(pending(state)).toBe(true);
    });
  });

  describe("CREATE_USER_SUCCESS", () => {
    const stateBefore = reducer(undefined, createUserRequest("john", "secret"));
    const state = reducer(stateBefore, createUserSuccess(USER));

    it("is not creating", () => {
      expect(pending(state)).toBe(false);
    });

    it("sets user", () => {
      expect(user(state)).toEqual(USER);
    });
  });

  describe("CREATE_USER_FAILURE", () => {
    const stateBefore = reducer(undefined, createUserRequest("john", "secret"));
    const state = reducer(stateBefore, createUserFailure(GENERIC_ERROR));

    it("is not creating", () => {
      expect(pending(state)).toBe(false);
    });
  });
});
