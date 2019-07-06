// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Cookies from "universal-cookie";

import createStore from "../redux/store";
import { just } from "../utils";
import { APP_ROOT } from "../constants";
import ClientRoot from "./ClientRoot";

const preloadedState = window.REDUX_STATE;
delete window.REDUX_STATE;

const cookies = new Cookies();
const store = createStore(cookies, preloadedState);
const root = just(document.querySelector(`#${APP_ROOT}`));

ReactDOM.hydrate(<ClientRoot store={store} />, root);
