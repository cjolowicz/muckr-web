// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import ArtistsPage from "./pages/ArtistsPage";
import PrivateRoute from "../containers/PrivateRoute";
import Index from "../containers/pages/Index";
import SignIn from "../containers/pages/SignIn";
import Message from "../containers/Message";
import * as routes from "../routes";

const App = () => (
  <>
    <CssBaseline />
    <Switch>
      <Route path={routes.INDEX} exact component={Index} />
      <Route path={routes.SIGNIN} component={SignIn} />
      <PrivateRoute path={routes.ARTISTS} component={ArtistsPage} />
    </Switch>
    <Message />
  </>
);

export default App;
