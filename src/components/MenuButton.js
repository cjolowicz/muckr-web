// @flow
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

type Props = {
  className: string,
  onMenuClick: Function
};

const MenuButton = ({ className, onMenuClick }: Props) => (
  <IconButton onClick={onMenuClick} className={className} color="inherit">
    <MenuIcon />
  </IconButton>
);

export default MenuButton;
