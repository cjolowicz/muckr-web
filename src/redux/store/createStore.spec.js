// @flow
import Cookies from "universal-cookie";

import createStore from "./createStore";
import rootReducer from "../reducers";
import { message } from "../selectors";
import { openMessage } from "../message/actions";

const cookies = new Cookies();

describe("createStore", () => {
  describe("without preloadedState", () => {
    it("uses the initial state", () => {
      const store = createStore(cookies);
      const state = store.getState();
      expect(message(state)).toBeNull();
    });
  });

  describe("with preloadedState", () => {
    it("uses the preloaded state", () => {
      const preloadedState = rootReducer(undefined, openMessage("Lorem"));
      const store = createStore(cookies, preloadedState);
      const state = store.getState();
      expect(message(state)).toEqual("Lorem");
    });
  });
});
