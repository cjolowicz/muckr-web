// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MUIAppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import MenuButton from "../containers/MenuButton";
import AuthButton from "../containers/AuthButton";

type Props = {
  classes: Object
};

const AppBar = ({ classes }: Props) => (
  <div className={classes.root}>
    <MUIAppBar position="static">
      <Toolbar>
        <MenuButton className={classes.menuButton} />
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Muckr
        </Typography>
        <AuthButton />
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

export default withStyles(styles)(AppBar);
