// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import AppBar from "./AppBar";
import Navigation from "./Navigation";
import withAuth from "./withAuth";
import ArtistList from "./ArtistList";
import SignIn from "./SignIn";
import * as routes from "../routes";

const ArtistListWithAuth = withAuth(ArtistList);

const Index = () => <h2>Welcome</h2>;
const Artists = () => <ArtistListWithAuth />;

const Routes = () => (
  <Switch>
    <Route path={routes.INDEX} exact component={Index} />
    <Route path={routes.SIGNIN} component={SignIn} />
    <Route path={routes.ARTISTS} component={Artists} />
  </Switch>
);

type Props = {
  navigationOpen: boolean,
  openNavigation: Function,
  closeNavigation: Function
};

const App = ({ navigationOpen, openNavigation, closeNavigation }: Props) => (
  <>
    <CssBaseline />
    <AppBar onMenuClick={openNavigation} />
    <Navigation onClose={closeNavigation} open={navigationOpen} />
    <Routes />
  </>
);

export default App;
