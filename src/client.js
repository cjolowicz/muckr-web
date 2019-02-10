// @flow
import "@babel/polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import { JssProvider } from "react-jss";
import {
  MuiThemeProvider,
  createMuiTheme,
  createGenerateClassName
} from "@material-ui/core/styles";

import { just } from "./utils";
import { APP_ROOT } from "./constants";
import { App } from "./components/App";

class Main extends React.Component<{}> {
  componentDidMount() {
    const jss = document.getElementById("jss-server-side");
    if (jss && jss.parentNode) {
      jss.parentNode.removeChild(jss);
    }
  }

  render() {
    return <App />;
  }
}

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  }
});
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
