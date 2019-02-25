// @flow
import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import * as routes from "../routes";

type Props = {
  token: ?string,
  classes: Object,
  clearToken: Function
};

const AppBar = ({ token, classes, clearToken }: Props) => (
  <MUIAppBar position="fixed" className={classes.appBar}>
    <Toolbar>
      <Typography
        variant="h6"
        color="inherit"
        className={classes.title}
        component={Link}
        to={routes.INDEX}
      >
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

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1,
    textDecoration: "none"
  }
});

export default withStyles(styles)(AppBar);
