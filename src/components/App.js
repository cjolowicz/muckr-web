// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import ArtistsPage from "./pages/ArtistsPage";
import PrivateRoute from "./PrivateRoute";
import FrontPage from "./pages/FrontPage";
import SignInPage from "./pages/SignInPage";
import Message from "./layouts/Message";
import * as routes from "../routes";

const App = () => (
  <>
    <CssBaseline />
    <Switch>
      <Route path={routes.INDEX} exact component={FrontPage} />
      <Route path={routes.SIGNIN} component={SignInPage} />
      <PrivateRoute path={routes.ARTISTS} component={ArtistsPage} />
    </Switch>
    <Message />
  </>
);

export default App;
