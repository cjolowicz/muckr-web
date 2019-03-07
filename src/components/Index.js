// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";

import Layout, { Header } from "./Layout";
import SignUp from "../containers/SignUp";

type Props = {
  token: ?string
};

const Index = ({ token }: Props) => {
  if (token) {
    return (
      <Layout>
        <Typography variant="h5">Welcome</Typography>
      </Layout>
    );
  }

  return (
    <>
      <Header />
      <SignUp />
    </>
  );
};

export default Index;
