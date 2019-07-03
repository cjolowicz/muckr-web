// @flow
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

type Props = {
  open: boolean,
  closeDialog: Function,
  createArtist: Function,
  token: ?string
};

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

const CreateArtistDialog = ({
  open,
  closeDialog,
  createArtist,
  token
}: Props) => {
  const [name, setName] = useState("");
  const handleNameChange = (event: InputEvent) => {
    setName(event.target.value);
  };
  const handleSubmit = () => {
    if (token) {
      createArtist(token, name);
      closeDialog();
    }
  };
  return (
    <Dialog data-testid="dialog" open={open} onClose={closeDialog}>
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
  );
};

export default CreateArtistDialog;
