// @flow
import express from "express";
import compression from "compression";
import cookiesMiddleware from "universal-cookie-express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import { App } from "../components/App";
import {
  APP_ROOT,
  STATIC_PATH,
  WEBPACK_DIR,
  WEBPACK_LOCATION
} from "../constants";

const generateHTML = jsx => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    >
  </head>
  <body>
    <div id="${APP_ROOT}">${renderToString(jsx)}</div>
    <script src="${WEBPACK_LOCATION}"></script>
  </body>
</html>`;

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static(WEBPACK_DIR));
app.use(cookiesMiddleware());
app.get("/*", (request, response: express$Response) => {
  const jsx = (
    <StaticRouter context={{}} location={request.url}>
      <CookiesProvider cookies={request.universalCookies}>
        <App />
      </CookiesProvider>
    </StaticRouter>
  );
  const html = generateHTML(jsx);
  return response.send(html);
});

export default app;
