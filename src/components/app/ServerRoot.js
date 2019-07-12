// @flow
import React from "react";
import type { Store } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import theme from "../../theme";

type Props = {
  location: string,
  store: Store<*, *>
};

const ServerRoot = ({ location, store }: Props) => (
  <StaticRouter context={{}} location={location}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StaticRouter>
);

export default ServerRoot;
