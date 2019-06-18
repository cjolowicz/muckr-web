// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Cookies from "universal-cookie";
import { ServerStyleSheets } from "@material-ui/styles";

import ServerRoot from "./ServerRoot";
import generatePage from "./generatePage";
import persistToken from "../store/persistToken";
import rootReducer from "../reducers";

type Request = express$Request & {
  universalCookies: Cookies
};

type Response = express$Response;

function renderState(store) {
  const state = store.getState();
  return JSON.stringify(state).replace(/</g, "\\u003c");
}

export default function render(request: Request, response: Response) {
  const preloadedState = undefined;
  const enhancer = compose(
    applyMiddleware(thunk),
    persistToken(request.universalCookies)
  );
  const store = createStore(rootReducer, preloadedState, enhancer);
  const sheets = new ServerStyleSheets();
  const html = renderToString(
    sheets.collect(<ServerRoot location={request.url} store={store} />)
  );
  const css = sheets.toString();
  const state = renderState(store);
  const page = generatePage(html, css, state);
  return response.send(page);
}
