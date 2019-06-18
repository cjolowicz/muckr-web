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

export const Header = () => (
  <>
    <AppBar />
    <Navigation />
  </>
);

const Layout = ({ children, classes }: Props) => (
  <>
    <Header />
    <main className={classes.main}>
      <Paper className={classes.paper}>{children}</Paper>
    </main>
  </>
);

const styles = theme => ({
  main: {
    padding: theme.spacing(3)
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
});

export default withStyles(styles)(Layout);
