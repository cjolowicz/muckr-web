// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import WelcomePage from "./WelcomePage";
import SignUpLayout from "../layouts/SignUpLayout";
import SignUp from "../SignUp";
import { token } from "../../redux/selectors";

type Props = {
  token: ?string
};

// eslint-disable-next-line no-shadow
export const Index = ({ token }: Props) => {
  if (token) {
    return <WelcomePage />;
  }

  return (
    <SignUpLayout>
      <SignUp />
    </SignUpLayout>
  );
};

export default connect(
  createStructuredSelector({ token }),
  null
)(Index);
