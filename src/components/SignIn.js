// @flow
import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  nextRoute: string,
  classes: Object,
  onSubmit: Function,
  token: ?string
};

type InputEvent = SyntheticInputEvent<HTMLInputElement>;
type ButtonEvent = SyntheticInputEvent<HTMLButtonElement>;

export const PureSignIn = ({ nextRoute, classes, onSubmit, token }: Props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (token) {
    return <Redirect to={nextRoute} />;
  }

  const handleUsernameChange = (event: InputEvent) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: InputEvent) => {
    setPassword(event.target.value);
  };

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
        </form>
      </Paper>
    </main>
  );
};

const styles = theme => ({
  main: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  form: {
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

export default withStyles(styles)(PureSignIn);
