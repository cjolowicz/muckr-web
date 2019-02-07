// @flow
import express from "express";
import compression from "compression";
import cookiesMiddleware from "universal-cookie-express";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import { App } from "../components/App";
import {
  APP_ROOT,
  STATIC_PATH,
  WEBPACK_PATH,
  WEBPACK_LOCATION
} from "../constants";

const generateHTML = jsx => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <div id="${APP_ROOT}">${renderToString(jsx)}</div>
    <script src="${WEBPACK_LOCATION}"></script>
  </body>
</html>`;

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static(WEBPACK_PATH));
app.use(cookiesMiddleware());
app.get("/*", (request, response: express$Response) => {
  const jsx = (
    <StaticRouter context={{}} location={request.url}>
      <App />
    </StaticRouter>
  );
  const html = generateHTML(jsx);
  return response.send(html);
});

export default app;
