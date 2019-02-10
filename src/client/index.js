// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { createGenerateClassName } from "@material-ui/core/styles";

import { just } from "../utils";
import { APP_ROOT } from "../constants";
import Root from "./Root";

const generateClassName = createGenerateClassName();
const root = just(document.querySelector(`#${APP_ROOT}`));

ReactDOM.hydrate(<Root generateClassName={generateClassName} />, root);
