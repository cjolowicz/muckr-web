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
  token: ?string,
  classes: Object,
  onMenuClick: Function,
  clearToken: Function
};

const AppBar = ({ token, classes, onMenuClick, clearToken }: Props) => (
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
      {token ? (
        <Button onClick={clearToken} color="inherit">
          Sign Out
        </Button>
      ) : (
        <Button component={Link} to={routes.SIGNIN} color="inherit">
          Sign In
        </Button>
      )}
    </Toolbar>
  </MUIAppBar>
);

const styles = {
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

export default withStyles(styles)(AppBar);
