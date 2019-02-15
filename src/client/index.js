// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { createGenerateClassName } from "@material-ui/core/styles";

import { just } from "../utils";
import { APP_ROOT } from "../constants";
import Root from "./Root";
import rootReducer from "../reducers";

function loadState() {
  const state = window.REDUX_STATE;
  delete window.REDUX_STATE;
  return state;
}

const store = createStore(rootReducer, loadState());
const generateClassName = createGenerateClassName();
const root = just(document.querySelector(`#${APP_ROOT}`));

ReactDOM.hydrate(
  <Root generateClassName={generateClassName} store={store} />,
  root
);
