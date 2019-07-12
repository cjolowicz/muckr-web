// @flow
import React from "react";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { openNavigation } from "../redux/navigation/actions";

type Props = {
  className: string,
  openNavigation: Function
};

// eslint-disable-next-line no-shadow
const MenuButton = ({ className, openNavigation }: Props) => (
  <IconButton onClick={openNavigation} className={className} color="inherit">
    <MenuIcon />
  </IconButton>
);

export default connect(
  null,
  { openNavigation }
)(MenuButton);
