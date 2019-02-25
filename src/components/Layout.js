// @flow
import * as React from "react";

import AppBar from "../containers/AppBar";
import Navigation from "../containers/Navigation";

type Props = {
  children: React.Node
};

const Layout = ({ children }: Props) => (
  <>
    <AppBar />
    <Navigation />
    {children}
  </>
);

export default Layout;
