// @flow
import React from "react";
import { renderToString } from "react-dom/server";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { SheetsRegistry } from "jss";
import Cookies from "universal-cookie";
import { createGenerateClassName } from "@material-ui/core/styles";

import Root from "./Root";
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
  const sheetsRegistry = new SheetsRegistry();
  const sheetsManager = new Map();
  const generateClassName = createGenerateClassName();
  const html = renderToString(
    <Root
      location={request.url}
      sheetsRegistry={sheetsRegistry}
      sheetsManager={sheetsManager}
      generateClassName={generateClassName}
      store={store}
    />
  );
  const css = sheetsRegistry.toString();
  const state = renderState(store);
  const page = generatePage(html, css, state);
  return response.send(page);
}
