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
import { makeStyles } from "@material-ui/styles";

type Props = {
  createArtist: Function,
  token: ?string
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

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

const CreateArtistDialog = ({ createArtist, token }: Props) => {
  const classes = useStyles();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [name, setName] = useState("");
  const handleNameChange = (event: InputEvent) => {
    setName(event.target.value);
  };
  const openDialog = () => {
    setName("");
    setIsDialogOpen(true);
  };
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

export default CreateArtistDialog;
