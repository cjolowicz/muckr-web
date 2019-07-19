// @flow
import React from "react";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import { makeStyles } from "@material-ui/styles";

import { openCreateDialog } from "../../redux/dialog/actions";

export type Props = {
  openCreateDialog: Function
};

const useStyles = makeStyles({
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  }
});

// eslint-disable-next-line no-shadow
const ArtistButton = ({ openCreateDialog }: Props) => {
  const classes = useStyles();
  return (
    <Fab
      title="Add"
      color="primary"
      onClick={openCreateDialog}
      className={classes.fab}
    >
      <AddIcon />
    </Fab>
  );
};

export default connect(
  null,
  { openCreateDialog }
)(ArtistButton);
