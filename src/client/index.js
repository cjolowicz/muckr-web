// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import Cookies from "universal-cookie";

import { just } from "../utils";
import { APP_ROOT } from "../constants";
import ClientRoot from "./ClientRoot";
import persistToken from "../redux/store/persistToken";
import rootReducer from "../redux/reducers";

const cookies = new Cookies();

function loadState() {
  const state = window.REDUX_STATE;
  delete window.REDUX_STATE;
  return state;
}

const preloadedState = loadState();
const enhancer = compose(
  applyMiddleware(thunk, logger),
  persistToken(cookies)
);
const store = createStore(rootReducer, preloadedState, enhancer);
const root = just(document.querySelector(`#${APP_ROOT}`));

ReactDOM.hydrate(<ClientRoot store={store} />, root);
