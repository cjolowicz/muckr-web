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
      <div className={classes.toolbar} />
      <Paper className={classes.paper}>{children}</Paper>
    </main>
  </>
);

const styles = theme => ({
  main: {
    padding: theme.spacing.unit * 3
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  toolbar: theme.mixins.toolbar
});

export default withStyles(styles)(Layout);
