// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Layout from "./Layout";
import PrivateRoute from "../containers/PrivateRoute";
import FetchingArtistList from "../containers/FetchingArtistList";
import Index from "./Index";
import SignIn from "../containers/SignIn";
import Message from "../containers/Message";
import * as routes from "../routes";

const Artists = () => (
  <Layout>
    <FetchingArtistList />
  </Layout>
);

const Routes = () => (
  <Switch>
    <Route path={routes.INDEX} exact component={Index} />
    <Route path={routes.SIGNIN} component={SignIn} />
    <PrivateRoute path={routes.ARTISTS} component={Artists} />
  </Switch>
);

const App = () => (
  <>
    <CssBaseline />
    <Routes />
    <Message />
  </>
);

export default App;
