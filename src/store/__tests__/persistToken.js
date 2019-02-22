// @flow
import { createStore } from "redux";
import configureStore from "redux-mock-store";
import Cookies from "universal-cookie";

import { loadToken, saveToken } from "../persistToken";
import rootReducer, { initialState } from "../../reducers";
import {
  fetchTokenSuccess,
  FETCH_TOKEN_SUCCESS
} from "../../actions/fetchToken";
import { TOKEN } from "../../test/fixtures";

describe("persistToken", () => {
  const cookies = new Cookies();

  describe("loadToken", () => {
    const mockStore = configureStore([]);
    let store;

    describe("without token", () => {
      beforeEach(() => {
        store = mockStore(initialState);
        cookies.remove("token");
        loadToken(store, cookies);
      });

      it("is no-op", () => {
        const actions = store.getActions();
        expect(actions).toHaveLength(0);
      });
    });

    describe("with token", () => {
      beforeEach(() => {
        store = mockStore(initialState);
        cookies.set("token", TOKEN);
        loadToken(store, cookies);
      });

      it("dispatches an action", () => {
        const actions = store.getActions();
        expect(actions).toHaveLength(1);
      });

      it("dispatches FETCH_TOKEN_SUCCESS", () => {
        const [action] = store.getActions();
        expect(action.type).toEqual(FETCH_TOKEN_SUCCESS);
      });

      it("dispatches an action with loaded token", () => {
        const [action] = store.getActions();
        if (action.type === FETCH_TOKEN_SUCCESS) {
          expect(action.token).toEqual(TOKEN);
        }
      });
    });
  });

  describe("saveToken", () => {
    let store;

    beforeEach(() => {
      cookies.remove("token");
      store = createStore(rootReducer);
      saveToken(store, cookies);
    });

    describe("initially", () => {
      it("does not set cookie", () => {
        const token = cookies.get("token");
        expect(token).toBeFalsy();
      });
    });

    describe("after unrelated action", () => {
      beforeEach(() => {
        store.dispatch({
          type: "test"
        });
      });

      it("does not set cookie", () => {
        const token = cookies.get("token");
        expect(token).toBeFalsy();
      });
    });

    describe("after token is fetched", () => {
      beforeEach(() => {
        store.dispatch(fetchTokenSuccess(TOKEN));
      });

      it("sets cookie", () => {
        const token = cookies.get("token");
        expect(token).toEqual(TOKEN);
      });
    });
  });
});
