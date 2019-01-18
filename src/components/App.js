// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Navigation } from "./Navigation";
import { withAuth } from "./Auth";
import { ArtistList } from "./ArtistList";
import { LoginForm } from "./LoginForm";
import * as routes from "../routes";

const ArtistListWithAuth = withAuth(ArtistList);

const Index = () => <h2>Welcome</h2>;
const Login = () => <LoginForm nextRoute={routes.ARTISTS} />;
const Artists = () => <ArtistListWithAuth />;

const Routes = () => (
  <Switch>
    <Route path={routes.INDEX} exact component={Index} />
    <Route path={routes.LOGIN} component={Login} />
    <Route path={routes.ARTISTS} component={Artists} />
  </Switch>
);

export const App = () => (
  <>
    <Navigation />
    <Routes />
  </>
);
