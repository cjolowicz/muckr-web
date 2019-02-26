// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import withStyles from "@material-ui/core/styles/withStyles";

import AppBar from "./AppBar";
import Navigation from "../containers/Navigation";

type Props = {
  children: React.Node,
  classes: Object
};

const Layout = ({ children, classes }: Props) => (
  <>
    <AppBar />
    <Navigation />
    <main className={classes.main}>
      <Paper>{children}</Paper>
    </main>
  </>
);

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(Layout);
