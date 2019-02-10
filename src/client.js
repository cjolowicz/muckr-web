// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { JssProvider } from "react-jss";
import {
  MuiThemeProvider,
  createGenerateClassName
} from "@material-ui/core/styles";

import { just } from "./utils";
import { APP_ROOT, JSS_STYLE_ID } from "./constants";
import { App } from "./components/App";
import { theme } from "./theme";

class Main extends React.Component<{}> {
  componentDidMount() {
    const jss = document.getElementById(JSS_STYLE_ID);
    if (jss && jss.parentNode) {
      jss.parentNode.removeChild(jss);
    }
  }

  render() {
    return <App />;
  }
}

const generateClassName = createGenerateClassName();
const root = just(document.querySelector(`#${APP_ROOT}`));
const jsx = (
  <BrowserRouter>
    <CookiesProvider>
      <JssProvider generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <Main />
        </MuiThemeProvider>
      </JssProvider>
    </CookiesProvider>
  </BrowserRouter>
);

ReactDOM.hydrate(jsx, root);
