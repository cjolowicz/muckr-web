// @flow
import React from "react";
import type { Store } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { SheetsRegistry } from "jss";
import { JssProvider } from "react-jss";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "../components/App";
import theme from "../theme";

type Props = {
  location: string,
  sheetsRegistry: SheetsRegistry,
  sheetsManager: Map<*, *>,
  generateClassName: Function,
  store: Store<*, *>
};

const ServerRoot = ({
  location,
  sheetsRegistry,
  sheetsManager,
  generateClassName,
  store
}: Props) => (
  <StaticRouter context={{}} location={location}>
    <JssProvider
      registry={sheetsRegistry}
      generateClassName={generateClassName}
    >
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    </JssProvider>
  </StaticRouter>
);

export default ServerRoot;
