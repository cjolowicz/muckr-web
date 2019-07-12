// @flow
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import type { Dispatch } from "../types";
import { createUser } from "./operations";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./constants";
import * as api from "../../api/user";
import { unsafeCast } from "../../utils";
import mock from "../../utils/test/mock";
import { USER } from "../../utils/test/fixtures";

const mockStore = configureStore([thunk]);

const mockCreateUser = promise => {
  beforeAll(() => {
    jest.spyOn(api, "createUser").mockReturnValue(promise);
  });

  afterAll(() => {
    mock(api.createUser).mockRestore();
  });

  return promise;
};

describe("createUser", () => {
  describe("on success", () => {
    const promise = mockCreateUser(Promise.resolve(USER));

    it("dispatches CREATE_USER_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createUser("john", "secret"));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(CREATE_USER_REQUEST);
    });

    it("dispatches CREATE_USER_SUCCESS", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createUser("john", "secret"));
      await promise;

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(CREATE_USER_SUCCESS);
    });
  });

  describe("on error", () => {
    expect.assertions(1);

    const error = Error("fail");
    const promise = mockCreateUser(Promise.reject(error));

    it("dispatches CREATE_USER_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createUser("john", "secret"));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(CREATE_USER_REQUEST);
    });

    it("dispatches CREATE_USER_FAILURE", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(createUser("john", "secret"));

      try {
        await promise;
      } catch (unused) {
        // ignore
      }

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(CREATE_USER_FAILURE);
    });
  });
});
