// @flow
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import type { Dispatch } from "../../types";
import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE
} from "../constants";
import { fetchToken } from "../operations";
import * as api from "../../../api/token";
import { unsafeCast } from "../../../utils";
import mock from "../../../utils/test/mock";
import { TOKEN } from "../../../utils/test/fixtures";

const mockStore = configureStore([thunk]);

const mockFetchToken = promise => {
  beforeAll(() => {
    jest.spyOn(api, "fetchToken").mockReturnValue(promise);
  });

  afterAll(() => {
    mock(api.fetchToken).mockRestore();
  });

  return promise;
};

describe("fetchToken", () => {
  describe("on success", () => {
    const promise = mockFetchToken(Promise.resolve(TOKEN));

    it("dispatches FETCH_TOKEN_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchToken("john", "secret"));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(FETCH_TOKEN_REQUEST);
    });

    it("dispatches FETCH_TOKEN_SUCCESS", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchToken("john", "secret"));
      await promise;

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(FETCH_TOKEN_SUCCESS);
    });
  });

  describe("on error", () => {
    expect.assertions(1);

    const error = Error("fail");
    const promise = mockFetchToken(Promise.reject(error));

    it("dispatches FETCH_TOKEN_REQUEST", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchToken("john", "secret"));

      const actions = store.getActions();
      const action = actions[0];

      expect(action.type).toEqual(FETCH_TOKEN_REQUEST);
    });

    it("dispatches FETCH_TOKEN_FAILURE", async () => {
      const store = mockStore({});
      const dispatch = unsafeCast<Dispatch>(store.dispatch);

      await dispatch(fetchToken("john", "secret"));

      try {
        await promise;
      } catch (unused) {
        // ignore
      }

      const actions = store.getActions();
      const action = actions[1];

      expect(action.type).toEqual(FETCH_TOKEN_FAILURE);
    });
  });
});
