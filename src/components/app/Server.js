// @flow
import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";

import App from "./App";
import theme from "../../theme";
import type { Store } from "../../redux/types";

type Props = {
  location: string,
  store: Store
};

const Server = ({ location, store }: Props) => (
  <StaticRouter context={{}} location={location}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </StaticRouter>
);

export default Server;
