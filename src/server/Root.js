// @flow
import React from "react";
import type { Store } from "redux";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { CookiesProvider, Cookies } from "react-cookie";
import { SheetsRegistry } from "jss";
import { JssProvider } from "react-jss";
import { MuiThemeProvider } from "@material-ui/core/styles";

import App from "../components/App";
import theme from "../theme";

type Props = {
  location: string,
  cookies: Cookies,
  sheetsRegistry: SheetsRegistry,
  sheetsManager: Map<*, *>,
  generateClassName: Function,
  store: Store<*, *>
};

const Root = ({
  location,
  cookies,
  sheetsRegistry,
  sheetsManager,
  generateClassName,
  store
}: Props) => (
  <StaticRouter context={{}} location={location}>
    <CookiesProvider cookies={cookies}>
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
    </CookiesProvider>
  </StaticRouter>
);

export default Root;
