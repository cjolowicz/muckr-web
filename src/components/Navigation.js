// @flow
import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";

import * as routes from "../routes";

type Props = {
  open: boolean,
  classes: Object,
  onClose: Function
};

const Navigation = ({ open, classes, onClose }: Props) => (
  <Drawer open={open} onClose={onClose}>
    <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
      <div className={classes.list}>
        <List>
          <ListItem button component={Link} to={routes.INDEX}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to={routes.ARTISTS}>
            <ListItemText primary="Artists" />
          </ListItem>
        </List>
      </div>
    </div>
  </Drawer>
);

const styles = {
  list: {
    width: 250
  }
};

export default withStyles(styles)(Navigation);
