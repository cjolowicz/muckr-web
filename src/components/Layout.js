// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";

import AppBar from "../containers/AppBar";
import Navigation from "../containers/Navigation";

type Props = {
  children: React.Node
};

const Layout = ({ children }: Props) => (
  <div>
    <AppBar />
    <Navigation />
    <main>
      <Paper>{children}</Paper>
    </main>
  </div>
);

export default Layout;
