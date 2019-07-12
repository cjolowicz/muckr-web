// @flow
import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import type { Location } from "react-router-dom";
import { Route, Redirect } from "react-router-dom";

import * as routes from "../routes";
import { token } from "../redux/selectors";

type Props = {
  component: React.ComponentType<*>,
  token: ?string
};

type InnerProps = {
  location: Location
};

export const PrivateRoute = ({
  /* eslint-disable no-shadow */
  component: Component,
  token,
  ...rest
}: Props) => (
  /* eslint-enable */
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

export default connect(
  createStructuredSelector({ token }),
  null
)(PrivateRoute);
