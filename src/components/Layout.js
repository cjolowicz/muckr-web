// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

import AppBar from "./AppBar";
import Navigation from "./Navigation";

type Props = {
  children: React.Node
};

export const Header = () => (
  <>
    <AppBar />
    <Navigation />
  </>
);

const useStyles = makeStyles(theme => ({
  main: {
    padding: theme.spacing(3)
  },
  paper: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  }
}));

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <main className={classes.main}>
        <Paper className={classes.paper}>{children}</Paper>
      </main>
    </>
  );
};

export default Layout;
