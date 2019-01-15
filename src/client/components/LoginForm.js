// @flow
import React from "react";
import type { ContextRouter } from "react-router";

import { withRouter } from "react-router-dom";

import { login } from "../services/user";

type Props = ContextRouter & {
  nextRoute: string
};

type State = {
  username: string,
  password: string,
  error: ?Error,
  isLoading: boolean
};

export class LoginFormBase extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { username: "", password: "", error: null, isLoading: false };
  }

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = (event: SyntheticEvent<HTMLButtonElement>) => {
    const { history, nextRoute } = this.props;
    const { username, password } = this.state;

    this.setState({ isLoading: true });

    login(username, password)
      .then(() => {
        this.setState({ isLoading: false });
        history.push(nextRoute);
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
      });

    event.preventDefault();
  };

  render() {
    const { username, password, error, isLoading } = this.state;
    const disabled = !username.length || !password.length;

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="username"
          type="text"
          value={username}
          placeholder="username"
          onChange={this.handleChange}
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={this.handleChange}
        />
        <input type="submit" value="Sign in" disabled={disabled} />
        {error ? <p>{error.message}</p> : null}
        {isLoading ? <p>Logging in...</p> : null}
      </form>
    );
  }
}

export const LoginForm = withRouter(LoginFormBase);
