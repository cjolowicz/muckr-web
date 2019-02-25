// @flow
import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuButton from "../containers/MenuButton";
import AuthButton from "../containers/AuthButton";
import * as routes from "../routes";

type Props = {
  classes: Object
};

const AppBar = ({ classes }: Props) => (
  <MUIAppBar position="fixed" className={classes.appBar}>
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

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  title: {
    flexGrow: 1,
    textDecoration: "none"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

export default withStyles(styles)(AppBar);
