// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import { SheetsRegistry } from "jss";
import { createGenerateClassName } from "@material-ui/core/styles";

import { Root } from "./Root";
import { APP_ROOT, JSS_STYLE_ID, WEBPACK_LOCATION } from "../constants";

const generatePage = (html, css) => `<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
    >
    <style id="${JSS_STYLE_ID}">${css}</style>
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
  const generateClassName = createGenerateClassName();
  const html = renderToString(
    <Root
      location={request.url}
      cookies={request.universalCookies}
      sheetsRegistry={sheetsRegistry}
      sheetsManager={sheetsManager}
      generateClassName={generateClassName}
    />
  );
  const css = sheetsRegistry.toString();
  const page = generatePage(html, css);
  return response.send(page);
};
