// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Redirect } from "react-router-dom";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import useInputField from "../hooks/useInputField";
import * as api from "../../api/types";
import * as routes from "../../routes";
import { createUser } from "../../redux/user/operations";
import { user } from "../../redux/selectors";

type Props = {
  createUser: Function,
  user: ?api.User
};

type ButtonEvent = SyntheticInputEvent<HTMLButtonElement>;

const useStyles = makeStyles(theme => ({
  form: {
    marginTop: theme.spacing(1)
  },
  submit: {
    marginTop: theme.spacing(3)
  }
}));

// eslint-disable-next-line no-shadow
export const SignUp = ({ createUser, user }: Props) => {
  const classes = useStyles();
  const [username, handleUsernameChange] = useInputField();
  const [password, handlePasswordChange] = useInputField();

  const handleSubmit = (event: ButtonEvent) => {
    event.preventDefault();
    createUser(username, password);
  };

  if (user) {
    return <Redirect to={routes.SIGNIN} />;
  }

  return (
    <>
      <Typography component="h1" variant="h5">
        Sign up for Muckr
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
            autoComplete="new-password"
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
          Sign up
        </Button>
      </form>
    </>
  );
};

export default connect(
  createStructuredSelector({ user }),
  { createUser }
)(SignUp);
