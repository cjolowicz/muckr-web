// @flow
import React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import { AppBar } from "./AppBar";
import { Navigation } from "./Navigation";
import { withAuth } from "./Auth";
import { ArtistList } from "./ArtistList";
import { SignIn } from "./SignIn";
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

type State = {
  navigationOpen: boolean
};

export class App extends React.Component<{}, State> {
  state = { navigationOpen: false };

  openNavigation = () => this.setState({ navigationOpen: true });

  closeNavigation = () => this.setState({ navigationOpen: false });

  render() {
    const { navigationOpen } = this.state;

    return (
      <>
        <CssBaseline />
        <AppBar onMenuClick={this.openNavigation} />
        <Navigation onClose={this.closeNavigation} open={navigationOpen} />
        <Routes />
      </>
    );
  }
}
