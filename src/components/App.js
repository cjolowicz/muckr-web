// @flow
import * as React from "react";
import { Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

import AppBar from "../containers/AppBar";
import Navigation from "../containers/Navigation";
import PrivateRoute from "../containers/PrivateRoute";
import FetchingArtistList from "../containers/FetchingArtistList";
import SignIn from "../containers/SignIn";
import Message from "../containers/Message";
import * as routes from "../routes";

const Layout = ({ children }: { children: React.Node }) => (
  <>
    <AppBar />
    <Navigation />
    {children}
  </>
);

const Index = () => (
  <Layout>
    <Typography variant="h5">Welcome</Typography>
  </Layout>
);

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
