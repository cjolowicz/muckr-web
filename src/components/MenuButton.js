// @flow
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
  className: string,
  openNavigation: Function
};

const MenuButton = ({ className, openNavigation }: Props) => (
  <IconButton onClick={openNavigation} className={className} color="inherit">
    <MenuIcon />
  </IconButton>
);

export default MenuButton;
