// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";

import AppBar from "./AppBar";
import Navigation from "./Navigation";
import Message from "./Message";

type Props = {
  children: React.Node
};

const useStyles = makeStyles(theme => ({
  main: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2, 3, 3)
  }
}));

const SignUpLayout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <>
      <AppBar />
      <Navigation />
      <main className={classes.main}>
        <Paper className={classes.paper}>{children}</Paper>
      </main>
      <Message />
    </>
  );
};

export default SignUpLayout;
