// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "../containers/AppBar";
import Navigation from "../containers/Navigation";
import PrivateRoute from "../containers/PrivateRoute";
import FetchingArtistList from "../containers/FetchingArtistList";
import SignIn from "../containers/SignIn";
import Message from "../containers/Message";
import * as routes from "../routes";

const Index = () => <h2>Welcome</h2>;

const Routes = () => (
  <Switch>
    <Route path={routes.INDEX} exact component={Index} />
    <Route path={routes.SIGNIN} render={() => <SignIn referrer="/" />} />
    <PrivateRoute path={routes.ARTISTS} component={FetchingArtistList} />
  </Switch>
);

const App = () => (
  <>
    <CssBaseline />
    <AppBar />
    <Navigation />
    <Routes />
    <Message />
  </>
);

export default App;
