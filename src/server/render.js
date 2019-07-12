// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import Cookies from "universal-cookie";
import { ServerStyleSheets } from "@material-ui/styles";

import ServerRoot from "../components/app/ServerRoot";
import generatePage from "./generatePage";
import createStore from "../redux/store";

type Request = express$Request & {
  universalCookies: Cookies
};

type Response = express$Response;

function renderState(store) {
  const state = store.getState();
  return JSON.stringify(state).replace(/</g, "\\u003c");
}

export default function render(request: Request, response: Response) {
  const store = createStore(request.universalCookies);
  const sheets = new ServerStyleSheets();
  const html = renderToString(
    sheets.collect(<ServerRoot location={request.url} store={store} />)
  );
  const css = sheets.toString();
  const state = renderState(store);
  const page = generatePage(html, css, state);
  return response.send(page);
}
