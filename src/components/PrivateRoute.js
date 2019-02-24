// @flow
import * as React from "react";
import type { Location } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

import * as routes from "../routes";

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
            pathname: routes.SIGNIN,
            state: { referrer: props.location }
          }}
        />
      )
    }
  />
);

export default PrivateRoute;
