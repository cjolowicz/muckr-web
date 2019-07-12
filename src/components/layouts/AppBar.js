// @flow
import React from "react";
import { Link } from "react-router-dom";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import MenuButton from "./MenuButton";
import AuthButton from "./AuthButton";
import * as routes from "../../routes";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textDecoration: "none"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

const AppBar = () => {
  const classes = useStyles();
  return (
    <MUIAppBar position="static">
      <Toolbar>
        <MenuButton className={classes.menuButton} />
        <Typography
          variant="h6"
          color="inherit"
          className={classes.title}
          component={Link}
          to={routes.INDEX}
        >
          Muckr
        </Typography>
        <AuthButton />
      </Toolbar>
    </MUIAppBar>
  );
};

export default AppBar;
