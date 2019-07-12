// @flow
import * as React from "react";

import { Header } from "./Layout";

type Props = {
  children: React.Node
};

const SignUpLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default SignUpLayout;
