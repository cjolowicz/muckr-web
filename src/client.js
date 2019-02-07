// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { just } from "./utils";
import { APP_ROOT } from "./constants";
import { App } from "./components/App";

const root = just(document.querySelector(`#${APP_ROOT}`));
const jsx = (
  <BrowserRouter>
    <CookiesProvider>
      <App />
    </CookiesProvider>
  </BrowserRouter>
);

ReactDOM.hydrate(jsx, root);
