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
    display: "flex",
    height: "100%"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "column",
    height: "100%"
  },
  toolbar: {
    ...theme.mixins.toolbar,
    flexGrow: 0
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    flexGrow: 1,
    height: "100%"
  }
});

export default withStyles(styles)(Layout);
