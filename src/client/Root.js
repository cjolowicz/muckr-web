// @flow
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { JssProvider } from "react-jss";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { JSS_STYLE_ID } from "../constants";
import { App } from "../components/App";
import { RemoveElement } from "../components/RemoveElement";
import { theme } from "../theme";

type Props = {
  generateClassName: Function
};

export const Root = ({ generateClassName }: Props) => (
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