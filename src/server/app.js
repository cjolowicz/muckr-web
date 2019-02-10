// @flow
import express from "express";
import compression from "compression";
import cookiesMiddleware from "universal-cookie-express";
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
import {
  APP_ROOT,
  STATIC_PATH,
  WEBPACK_DIR,
  WEBPACK_LOCATION
} from "../constants";

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

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static(WEBPACK_DIR));
app.use(cookiesMiddleware());
app.get("/*", (request, response: express$Response) => {
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
});

export default app;
