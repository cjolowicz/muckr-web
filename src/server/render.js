// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { SheetsRegistry } from "jss";
import { JssProvider } from "react-jss";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

import { App } from "../components/App";
import { APP_ROOT, WEBPACK_LOCATION } from "../constants";

const generatePage = (html, css) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    >
    <style id="jss-server-side">${css}</style>
  </head>
  <body>
    <div id="${APP_ROOT}">${html}</div>
    <script src="${WEBPACK_LOCATION}"></script>
  </body>
</html>`;

type Request = express$Request & {
  universalCookies: Object
};

type Response = express$Response;

export const render = (request: Request, response: Response) => {
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const theme = createMuiTheme({
    typography: {
      useNextVariants: true
    }
  });
  const generateClassName = createGenerateClassName();
  const jsx = (
    <StaticRouter context={{}} location={request.url}>
      <CookiesProvider cookies={request.universalCookies}>
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
  const html = renderToString(jsx);
  const css = sheetsRegistry.toString();
  const page = generatePage(html, css);
  return response.send(page);
};
