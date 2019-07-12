// @flow
import * as React from "react";

import { Header } from "./Layout";
import Message from "./Message";

type Props = {
  children: React.Node
};

const SignUpLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Message />
    </>
  );
};

export default SignUpLayout;
