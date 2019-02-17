// @flow
import React from "react";
import { Redirect } from "react-router-dom";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import Message from "./Message";
import type { $FetchError } from "../services/user";

type Props = {
  nextRoute: string,
  classes: Object,
  onSubmit: Function,
  token: ?string,
  error: ?$FetchError
};

type State = {
  username: string,
  password: string
};

type InputEvent = SyntheticEvent<HTMLInputElement>;
type ButtonEvent = SyntheticEvent<HTMLButtonElement>;

export class SignInBase extends React.Component<Props, State> {
  state = { username: "", password: "" };

  handleChange = ({ currentTarget: { name, value } }: InputEvent) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event: ButtonEvent) => {
    event.preventDefault();

    const { onSubmit } = this.props;
    const { username, password } = this.state;

    onSubmit(username, password);
  };

  render() {
    const { token, nextRoute } = this.props;

    if (token) {
      return <Redirect to={nextRoute} />;
    }

    const { error, classes } = this.props;
    const { username, password } = this.state;

    let message = "";

    if (error) {
      message =
        error.response && error.response.status === 401
          ? "Incorrect username or password"
          : "An unknown error occurred";
    }

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign in to Muckr
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <Input
                autoFocus
                fullWidth
                autoComplete="username"
                name="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.handleChange}
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
                onChange={this.handleChange}
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
        {message ? <Message message={message} /> : null}
      </main>
    );
  }
}

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

export default withStyles(styles)(SignInBase);
