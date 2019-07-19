// @flow
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/styles";

import Spinner from "./Spinner";
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

const SignInLayout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <>
      <main className={classes.main}>
        <Paper className={classes.paper}>{children}</Paper>
        <Box
          mt={3}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner />
        </Box>
      </main>
      <Message />
    </>
  );
};

export default SignInLayout;
