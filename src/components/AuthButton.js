// @flow
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";

import * as routes from "../routes";

type Props = {
  token: ?string,
  clearToken: Function,
  classes: Object
};

const AuthButton = ({ token, clearToken, classes }: Props) =>
  token ? (
    <Button onClick={clearToken} color="inherit">
      Sign Out
    </Button>
  ) : (
    <>
      <Button component={Link} to={routes.SIGNIN} color="inherit">
        Sign In
      </Button>
      <Button
        component={Link}
        to={routes.SIGNUP}
        color="inherit"
        variant="outlined"
        className={classes.signUp}
      >
        Sign Up
      </Button>
    </>
  );

const styles = theme => ({
  signUp: {
    marginLeft: theme.spacing.unit
  }
});

export default withStyles(styles)(AuthButton);
