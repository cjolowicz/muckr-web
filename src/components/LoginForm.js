// @flow
import React from "react";
import type { ContextRouter } from "react-router";

import { withRouter } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";

import { fetchToken } from "../services/user";

type Props = ContextRouter & {
  cookies: Cookies,
  nextRoute: string
};

type State = {
  username: string,
  password: string,
  error: ?Error,
  isLoading: boolean
};

export class LoginFormBase extends React.Component<Props, State> {
  state = { username: "", password: "", error: null, isLoading: false };

  handleChange = ({
    currentTarget: { name, value }
  }: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const { history, nextRoute, cookies } = this.props;
    const { username, password } = this.state;

    this.setState({ isLoading: true });

    try {
      const token = await fetchToken(username, password);
      cookies.set("token", token);
      this.setState({ isLoading: false });
      history.push(nextRoute);
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
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

export const LoginForm = withRouter(withCookies(LoginFormBase));
