// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import type { Artist } from "../api/artist";

type Props = {
  open: boolean,
  updateDialog: Function,
  closeDialog: Function,
  updateArtist: Function,
  token: ?string,
  artist: Artist
};

const UpdateArtistDialog = ({
  open,
  updateDialog,
  closeDialog,
  updateArtist,
  token,
  artist
}: Props) => {
  const handleChange = event =>
    updateDialog({ ...artist, name: event.target.value });

  const handleSubmit = () => {
    if (token) {
      updateArtist(token, artist);
    }
    closeDialog();
  };

  return (
    <Dialog data-testid="dialog" open={open} onClose={closeDialog}>
      <DialogTitle>Update artist</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          value={artist ? artist.name : ""}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateArtistDialog;
