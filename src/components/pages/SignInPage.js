// @flow
import React from "react";
import type { Location } from "react-router-dom";

import SignInLayout from "../layouts/SignInLayout";
import SignIn from "../user/SignIn";

type Props = {
  location: Location
};

const SignInPage = (props: Props) => (
  <SignInLayout>
    <SignIn {...props} />
  </SignInLayout>
);

export default SignInPage;
