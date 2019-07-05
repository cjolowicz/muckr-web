// @flow
import React from "react";
import type { Location } from "react-router-dom";
import { Redirect, Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import useInputField from "../hooks/useInputField";
import * as routes from "../routes";

type Props = {
  location: Location,
  onSubmit: Function,
  token: ?string
};

type ButtonEvent = SyntheticInputEvent<HTMLButtonElement>;

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
  },
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

const SignIn = ({ location, onSubmit, token }: Props) => {
  const classes = useStyles();
  const [username, handleUsernameChange] = useInputField();
  const [password, handlePasswordChange] = useInputField();

  if (token) {
    const { referrer } = location.state || { referrer: { pathname: "/" } };
    return <Redirect to={referrer} />;
  }

  const handleSubmit = (event: ButtonEvent) => {
    event.preventDefault();
    onSubmit(username, password);
  };

  return (
    <main className={classes.main}>
      <Paper className={classes.paper}>
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
      </Paper>
    </main>
  );
};

export default SignIn;
