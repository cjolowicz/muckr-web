// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";

import * as routes from "../../routes";
import { closeNavigation } from "../../redux/navigation/actions";
import { navigationOpen } from "../../redux/selectors";

type Props = {
  open: boolean,
  closeNavigation: Function
};

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

// eslint-disable-next-line no-shadow
const Navigation = ({ open, closeNavigation }: Props) => {
  const classes = useStyles();
  return (
    <Drawer open={open} onClose={closeNavigation}>
      <div
        tabIndex={0}
        role="button"
        onClick={closeNavigation}
        onKeyDown={closeNavigation}
      >
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

export default connect(
  createStructuredSelector({ open: navigationOpen }),
  { closeNavigation }
)(Navigation);
