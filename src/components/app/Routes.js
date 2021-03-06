// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";

import ArtistsPage from "../pages/ArtistsPage";
import PrivateRoute from "../utils/PrivateRoute";
import FrontPage from "../pages/FrontPage";
import SignInPage from "../pages/SignInPage";
import * as routes from "../../routes";

const Routes = () => (
  <Switch>
    <Route path={routes.INDEX} exact component={FrontPage} />
    <Route path={routes.SIGNIN} component={SignInPage} />
    <PrivateRoute path={routes.ARTISTS} component={ArtistsPage} />
  </Switch>
);

export default Routes;
