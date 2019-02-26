// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "./AppBar";
import Navigation from "./Navigation";

type Props = {
  children: React.Node,
  classes: Object
};

const Layout = ({ children, classes }: Props) => (
  <div className={classes.root}>
    <AppBar />
    <Navigation />
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Paper className={classes.paper}>{children}</Paper>
    </main>
  </div>
);

const styles = theme => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: theme.mixins.toolbar,
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

export default withStyles(styles)(Layout);
