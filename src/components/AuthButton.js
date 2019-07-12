// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import * as routes from "../routes";
import { clearToken } from "../redux/token/actions";
import { token } from "../redux/selectors";

type Props = {
  token: ?string,
  clearToken: Function
};

// eslint-disable-next-line no-shadow
const AuthButton = ({ token, clearToken }: Props) =>
  token ? (
    <Button onClick={clearToken} color="inherit">
      Sign Out
    </Button>
  ) : (
    <Button
      component={Link}
      to={routes.SIGNIN}
      color="inherit"
      variant="outlined"
    >
      Sign In
    </Button>
  );

export default connect(
  createStructuredSelector({ token }),
  { clearToken }
)(AuthButton);
