// @flow
import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import * as routes from "../routes";

type Props = {
  classes: Object,
  onMenuClick: Function
};

const AppBarBase = ({ classes, onMenuClick }: Props) => (
  <div className={classes.root}>
    <MUIAppBar position="static">
      <Toolbar>
        <IconButton
          onClick={onMenuClick}
          className={classes.menuButton}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Muckr
        </Typography>
        <Button component={Link} to={routes.SIGNIN} color="inherit">
          Sign In
        </Button>
      </Toolbar>
    </MUIAppBar>
  </div>
);

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export const AppBar = withStyles(styles)(AppBarBase);
