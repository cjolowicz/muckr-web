// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WelcomePage from "./WelcomePage";
import SignUpPage from "./SignUpPage";
import { token } from "../../redux/selectors";

type Props = {
  token: ?string
};

// eslint-disable-next-line no-shadow
export const FrontPage = ({ token }: Props) =>
  token ? <WelcomePage /> : <SignUpPage />;

export default connect(
  createStructuredSelector({ token }),
  null
)(FrontPage);
