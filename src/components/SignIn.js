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
  password: string,
  messageOpen: boolean,
  message: ?string
};

type InputEvent = SyntheticEvent<HTMLInputElement>;
type ButtonEvent = SyntheticEvent<HTMLButtonElement>;

const formatErrorMessage = error =>
  error.response && error.response.status === 401
    ? "Incorrect username or password"
    : "An unknown error occurred";

export class SignInBase extends React.Component<Props, State> {
  state = { username: "", password: "", messageOpen: false, message: null };

  componentDidMount() {
    const { error } = this.props;
    this.handleError(error);
  }

  componentDidUpdate({ error: previousError }: Props) {
    const { error } = this.props;

    if (error !== previousError) {
      this.handleError(error);
    }
  }

  handleError = (error: ?$FetchError) => {
    const messageOpen = !!error;
    const message = error ? formatErrorMessage(error) : null;
    this.setState({ messageOpen, message });
  };

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

    const { classes } = this.props;
    const { username, password, messageOpen, message } = this.state;

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
        <Message
          open={messageOpen}
          onClose={this.handleError}
          message={message}
        />
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
