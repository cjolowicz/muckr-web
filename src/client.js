// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { JssProvider } from "react-jss";
import {
  MuiThemeProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

import { just } from "./utils";
import { APP_ROOT, JSS_STYLE_ID } from "./constants";
import { App } from "./components/App";
import { RemoveElement } from "./components/RemoveElement";
import { theme } from "./theme";

const generateClassName = createGenerateClassName();
const root = just(document.querySelector(`#${APP_ROOT}`));
const jsx = (
  <BrowserRouter>
    <CookiesProvider>
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <RemoveElement elementId={JSS_STYLE_ID}>
            <App />
          </RemoveElement>
        </MuiThemeProvider>
      </JssProvider>
    </CookiesProvider>
  </BrowserRouter>
);

ReactDOM.hydrate(jsx, root);
