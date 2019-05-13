// @flow
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";

import useInputField from "../hooks/useInputField";

type Props = {
  createArtist: Function,
  token: string,
  classes: Object
};

const CreateArtistDialog = ({ createArtist, token, classes }: Props) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, handleNameChange] = useInputField();
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);
  const handleSubmit = () => {
    if (token) {
      createArtist(token, name);
      closeDialog();
    }
  };
  return (
    <>
      <Fab
        title="Add"
        color="primary"
        onClick={openDialog}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <Dialog data-testid="dialog" open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Add artist</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            value={name}
            onChange={handleNameChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const styles = {
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  }
};

export default withStyles(styles)(CreateArtistDialog);
