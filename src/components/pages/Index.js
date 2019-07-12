// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Typography from "@material-ui/core/Typography";

import Layout, { Header } from "../Layout";
import SignUp from "../SignUp";
import { token } from "../../redux/selectors";

type Props = {
  token: ?string
};

// eslint-disable-next-line no-shadow
export const Index = ({ token }: Props) => {
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

export default connect(
  createStructuredSelector({ token }),
  null
)(Index);
