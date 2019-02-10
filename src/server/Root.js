// @flow
import React from "react";
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
  generateClassName: Function
};

const Root = ({
  location,
  cookies,
  sheetsRegistry,
  sheetsManager,
  generateClassName
}: Props) => (
  <StaticRouter context={{}} location={location}>
    <CookiesProvider cookies={cookies}>
      <JssProvider
        registry={sheetsRegistry}
        generateClassName={generateClassName}
      >
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <App />
        </MuiThemeProvider>
      </JssProvider>
    </CookiesProvider>
  </StaticRouter>
);

export default Root;
