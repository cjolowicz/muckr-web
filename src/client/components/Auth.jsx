// @flow
import * as React from "react";

import { fetchToken } from "../auth";

type Props = {
  username: string,
  password: string
};

type State = {
  token: ?string,
  error: ?Error,
  isLoading: boolean
};

function getDisplayName(Component) {
  return Component.displayName || Component.name || "Component";
}

export function withAuth(
  Component: React.ComponentType<{ token: string }>
): React.ComponentType<Props> {
  class WithAuth extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);

      this.state = {
        token: null,
        error: null,
        isLoading: false
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });

      const { username, password } = this.props;

      fetchToken(username, password)
        .then(token =>
          this.setState({
            token,
            isLoading: false
          })
        )
        .catch(error =>
          this.setState({
            error,
            isLoading: false
          })
        );
    }

    render() {
      const { token, error, isLoading } = this.state;

      if (error) {
        return <p>error: {error.message}</p>;
      }

      if (isLoading) {
        return <p>Logging in...</p>;
      }

      if (!token) {
        return <p>no token</p>;
      }

      return <Component token={token} />;
    }
  }

  WithAuth.displayName = `WithAuth(${getDisplayName(Component)})`;

  return WithAuth;
}
