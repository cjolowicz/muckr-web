// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "../containers/AppBar";
import Navigation from "../containers/Navigation";

type Props = {
  children: React.Node,
  classes: Object
};

const Layout = ({ children, classes }: Props) => (
  <div className={classes.root}>
    <AppBar />
    <Navigation />
    <main>
      <Paper>{children}</Paper>
    </main>
  </div>
);

const styles = {
  root: {
    display: "flex"
  }
};

export default withStyles(styles)(Layout);
