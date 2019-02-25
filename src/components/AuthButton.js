// @flow
import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import * as routes from "../routes";

type Props = {
  token: ?string,
  clearToken: Function
};

const AuthButton = ({ token, clearToken }: Props) =>
  token ? (
    <Button onClick={clearToken} color="inherit">
      Sign Out
    </Button>
  ) : (
    <Button component={Link} to={routes.SIGNIN} color="inherit">
      Sign In
    </Button>
  );

export default AuthButton;
