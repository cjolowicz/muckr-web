// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";

import AppBar from "./AppBar";
import Navigation from "../containers/Navigation";

type Props = {
  children: React.Node
};

const Layout = ({ children }: Props) => (
  <>
    <AppBar />
    <Navigation />
    <main>
      <Paper>{children}</Paper>
    </main>
  </>
);

export default Layout;
