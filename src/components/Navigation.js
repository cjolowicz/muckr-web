// @flow
import React from "react";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";

import * as routes from "../routes";

type Props = {
  open: boolean,
  onClose: Function
};

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

const Navigation = ({ open, onClose }: Props) => {
  const classes = useStyles();
  return (
    <Drawer open={open} onClose={onClose}>
      <div tabIndex={0} role="button" onClick={onClose} onKeyDown={onClose}>
        <div className={classes.list}>
          <List>
            <ListItem button component={Link} to={routes.ARTISTS}>
              <ListItemText primary="Artists" />
            </ListItem>
          </List>
        </div>
      </div>
    </Drawer>
  );
};

export default Navigation;
