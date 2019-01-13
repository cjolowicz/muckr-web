// @flow
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";

import { withAuth } from "./Auth";
import { ArtistList } from "./ArtistList";
import { API_USER, API_PASSWORD } from "../../constants";

const ArtistListWithAuth = withAuth(ArtistList);

const Index = () => <h2>Welcome</h2>;
const Artists = () => (
  <ArtistListWithAuth username={API_USER} password={API_PASSWORD} />
);

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/artists/">Artists</Link>
      </li>
    </ul>
  </nav>
);

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/artists/" component={Artists} />
  </Switch>
);

export const AppWithoutRouter = () => (
  <div>
    <Header />
    <Routes />
  </div>
);

export const App = () => (
  <BrowserRouter>
    <AppWithoutRouter />
  </BrowserRouter>
);
