// @flow
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import { JSS_STYLE_ID } from "../../constants";
import App from "./App";
import RemoveElement from "../utils/RemoveElement";
import theme from "../../theme";
import type { Store } from "../../redux/types";

type Props = {
  store: Store
};

const Client = ({ store }: Props) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <RemoveElement elementId={JSS_STYLE_ID}>
        <Provider store={store}>
          <App />
        </Provider>
      </RemoveElement>
    </ThemeProvider>
  </BrowserRouter>
);

export default Client;
