// @flow
import * as React from "react";
import type { Location } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

type Props = {
  component: React.ComponentType<*>,
  token: ?string
};

type InnerProps = {
  location: Location
};

const PrivateRoute = ({ component: Component, token, ...rest }: Props) => (
  <Route
    {...rest}
    render={(props: InnerProps) =>
      token ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { nextRoute: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
