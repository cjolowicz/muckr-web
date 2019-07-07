// @flow
import Cookies from "universal-cookie";

import { fetchTokenSuccess } from "../token/actions";
import { token as tokenSelector } from "../selectors";
import type { Store, StoreCreator } from "../types";

export const loadToken = (store: Store, cookies: Cookies) => {
  const token = cookies.get("token");

  if (token) {
    store.dispatch(fetchTokenSuccess(token));
  }
};

export const saveToken = (store: Store, cookies: Cookies) => {
  let previousToken = null;

  store.subscribe(() => {
    const token = tokenSelector(store.getState());

    if (token === previousToken) {
      return;
    }

    if (token) {
      cookies.set("token", token);
    } else {
      cookies.remove("token");
    }

    previousToken = token;
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
