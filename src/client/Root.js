// @flow
import React from "react";
import type { Store } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { JssProvider } from "react-jss";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { JSS_STYLE_ID } from "../constants";
import App from "../components/App";
import RemoveElement from "../components/RemoveElement";
import theme from "../theme";

type Props = {
  generateClassName: Function,
  store: Store<*, *>
};

const Root = ({ generateClassName, store }: Props) => (
  <BrowserRouter>
    <JssProvider generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <RemoveElement elementId={JSS_STYLE_ID}>
          <Provider store={store}>
            <App />
          </Provider>
        </RemoveElement>
      </MuiThemeProvider>
    </JssProvider>
  </BrowserRouter>
);

export default Root;
