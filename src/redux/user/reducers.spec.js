// @flow
import reducer from "./reducers";
import { user } from "./selectors";
import { USER, GENERIC_ERROR } from "../../utils/test/fixtures";
import { noop } from "../noop/actions";
import {
  createUserRequest,
  createUserSuccess,
  createUserFailure
} from "./actions";

describe("user", () => {
  describe("initially", () => {
    const state = reducer(undefined, noop());

    it("has no user", () => {
      expect(user(state)).toBe(null);
    });
  });

  describe("CREATE_USER_REQUEST", () => {
    const state = reducer(undefined, createUserRequest("john", "secret"));

    it("has no user", () => {
      expect(user(state)).toBe(null);
    });
  });

  describe("CREATE_USER_SUCCESS", () => {
    const stateBefore = reducer(undefined, createUserRequest("john", "secret"));
    const state = reducer(stateBefore, createUserSuccess(USER));

    it("sets user", () => {
      expect(user(state)).toEqual(USER);
    });
  });

  describe("CREATE_USER_FAILURE", () => {
    const stateBefore = reducer(undefined, createUserRequest("john", "secret"));
    const state = reducer(stateBefore, createUserFailure(GENERIC_ERROR));

    it("has no user", () => {
      expect(user(state)).toBe(null);
    });
  });
});
