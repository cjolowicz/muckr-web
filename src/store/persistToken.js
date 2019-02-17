// @flow
import type { Store, StoreCreator } from "redux";
import Cookies from "universal-cookie";

import { fetchTokenSuccess } from "../actions/fetchToken";
import { getToken } from "../reducers";

export const loadToken = (store: Store, cookies: Cookies) => {
  const token = cookies.get("token");

  if (token) {
    store.dispatch(fetchTokenSuccess(token));
  }
};

export const saveToken = (store: Store, cookies: Cookies) => {
  let previousToken = null;

  store.subscribe(() => {
    const token = getToken(store.getState());

    if (token !== previousToken) {
      cookies.set("token", token);
      previousToken = token;
    }
  });
};

const persistToken = (cookies: Cookies) => (next: StoreCreator) => (
  reducer: Function,
  state: any
) => {
  const store = next(reducer, state);

  saveToken(store, cookies);
  loadToken(store, cookies);

  return store;
};

export default persistToken;
