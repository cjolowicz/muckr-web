// @flow
import reducer from "./reducers";
import { USER, GENERIC_ERROR } from "../../utils/test/fixtures";
import { noop } from "../noop/actions";
import {
  createUserRequest,
  createUserSuccess,
  createUserFailure
} from "./actions";
import type { State } from "./types";

const applyReducer = actions =>
  actions.reduce(reducer, ((undefined: any): State));

describe("user", () => {
  describe("initially", () => {
    const state = applyReducer([noop()]);

    it("has no user", () => {
      expect(state).toBe(null);
    });
  });

  describe("CREATE_USER_REQUEST", () => {
    const state = applyReducer([createUserRequest("john", "secret")]);

    it("has no user", () => {
      expect(state).toBe(null);
    });
  });

  describe("CREATE_USER_SUCCESS", () => {
    const state = applyReducer([
      createUserRequest("john", "secret"),
      createUserSuccess(USER)
    ]);

    it("sets user", () => {
      expect(state).toEqual(USER.username);
    });
  });

  describe("CREATE_USER_FAILURE", () => {
    const state = applyReducer([
      createUserRequest("john", "secret"),
      createUserFailure(GENERIC_ERROR)
    ]);

    it("has no user", () => {
      expect(state).toBe(null);
    });
  });
});
