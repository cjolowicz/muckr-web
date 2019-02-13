// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "../containers/AppBar";
import Navigation from "../containers/Navigation";
import PrivateRoute from "../containers/PrivateRoute";
import ArtistList from "../containers/ArtistList";
import SignIn from "../containers/SignIn";
import * as routes from "../routes";

const Index = () => <h2>Welcome</h2>;

const Routes = () => (
  <Switch>
    <Route path={routes.INDEX} exact component={Index} />
    <Route path={routes.SIGNIN} render={() => <SignIn nextRoute="/" />} />
    <PrivateRoute path={routes.ARTISTS} component={ArtistList} />
  </Switch>
);

const App = () => (
  <>
    <CssBaseline />
    <AppBar />
    <Navigation />
    <Routes />
  </>
);

export default App;
