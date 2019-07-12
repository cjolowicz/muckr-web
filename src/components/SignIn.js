// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import type { Location } from "react-router-dom";
import { Redirect, Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import useInputField from "./hooks/useInputField";
import * as routes from "../routes";
import { fetchToken } from "../redux/token/operations";
import { token } from "../redux/selectors";

type Props = {
  location: Location,
  fetchToken: Function,
  token: ?string
};

type ButtonEvent = SyntheticInputEvent<HTMLButtonElement>;

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  },
  signup: {
    marginTop: theme.spacing(3),
    textAlign: "center",
    display: "block"
  }
}));

// eslint-disable-next-line no-shadow
export const SignIn = ({ location, fetchToken, token }: Props) => {
  const classes = useStyles();
  const [username, handleUsernameChange] = useInputField();
  const [password, handlePasswordChange] = useInputField();

  if (token) {
    const { referrer } = location.state || {
      referrer: { pathname: routes.INDEX }
    };
    return <Redirect to={referrer} />;
  }

  const handleSubmit = (event: ButtonEvent) => {
    event.preventDefault();
    fetchToken(username, password);
  };

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign in to Muckr
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
          <Input
            autoFocus
            fullWidth
            autoComplete="username"
            name="username"
            type="text"
            value={username}
            placeholder="Username"
            onChange={handleUsernameChange}
          />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
          <Input
            fullWidth
            autoComplete="current-password"
            name="password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </FormControl>
        <Button
          className={classes.submit}
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
        <Link
          component={RouterLink}
          to={routes.INDEX}
          className={classes.signup}
        >
          Create an account
        </Link>
      </form>
    </>
  );
};

export default connect(
  createStructuredSelector({ token }),
  { fetchToken }
)(SignIn);
