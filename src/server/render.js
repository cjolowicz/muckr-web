// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import { SheetsRegistry } from "jss";
import { Cookies } from "react-cookie";
import { createGenerateClassName } from "@material-ui/core/styles";

import Root from "./Root";
import generatePage from "./generatePage";

type Request = express$Request & {
  universalCookies: Cookies
};

type Response = express$Response;

export default function render(request: Request, response: Response) {
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
}
