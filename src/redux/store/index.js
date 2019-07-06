// @flow
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Cookies from "universal-cookie";

import type { State } from "../types";
import rootReducer from "../reducers";
import persistToken from "./persistToken";

const createStore$ = (cookies: Cookies, preloadedState: ?State) => {
  const middlewares =
    typeof preloadedState === "undefined" ? [thunk] : [thunk, logger];

  const enhancer = compose(
    applyMiddleware(...middlewares),
    persistToken(cookies)
  );

  return createStore(rootReducer, preloadedState, enhancer);
};

export default createStore$;
