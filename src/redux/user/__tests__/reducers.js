// @flow
import user from "../reducers";
import { isCreatingUser, getUser, getUserError } from "../selectors";
import { USER, GENERIC_ERROR } from "../../../test/fixtures";
import { noop } from "../../noop/actions";
import {
  createUserRequest,
  createUserSuccess,
  createUserFailure
} from "../actions";

describe("user", () => {
  describe("initially", () => {
    const state = user(undefined, noop());

    it("is not creating", () => {
      expect(isCreatingUser(state)).toBe(false);
    });

    it("has no user", () => {
      expect(getUser(state)).toBe(null);
    });

    it("has no error", () => {
      expect(getUserError(state)).toBe(null);
    });
  });

  describe("CREATE_USER_REQUEST", () => {
    const state = user(undefined, createUserRequest("john", "secret"));

    it("is creating", () => {
      expect(isCreatingUser(state)).toBe(true);
    });
  });

  describe("CREATE_USER_SUCCESS", () => {
    const stateBefore = user(undefined, createUserRequest("john", "secret"));
    const state = user(stateBefore, createUserSuccess(USER));

    it("is not creating", () => {
      expect(isCreatingUser(state)).toBe(false);
    });

    it("sets user", () => {
      expect(getUser(state)).toEqual(USER);
    });
  });

  describe("CREATE_USER_FAILURE", () => {
    const stateBefore = user(undefined, createUserRequest("john", "secret"));
    const state = user(stateBefore, createUserFailure(GENERIC_ERROR));

    it("is not creating", () => {
      expect(isCreatingUser(state)).toBe(false);
    });
  });
});
