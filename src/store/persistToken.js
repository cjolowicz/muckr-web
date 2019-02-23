// @flow
import type { Store, StoreCreator } from "redux";
import Cookies from "universal-cookie";

import { fetchTokenSuccess } from "../actions/token";
import { getToken } from "../reducers";
import type { State } from "../reducers";
import type { Action } from "../actions";

export const loadToken = (store: Store<State, Action>, cookies: Cookies) => {
  const token = cookies.get("token");

  if (token) {
    store.dispatch(fetchTokenSuccess(token));
  }
};

export const saveToken = (store: Store<State, Action>, cookies: Cookies) => {
  let previousToken = null;

  store.subscribe(() => {
    const token = getToken(store.getState());

    if (token !== previousToken) {
      cookies.set("token", token);
      previousToken = token;
    }
  });
};

const persistToken = (cookies: Cookies) => (
  next: StoreCreator<State, Action>
) => (reducer: Function, state: any) => {
  const store = next(reducer, state);

  saveToken(store, cookies);
  loadToken(store, cookies);

  return store;
};

export default persistToken;
