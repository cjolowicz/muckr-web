// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import type { Artist } from "../api/artist";
import type { DialogType } from "../redux/dialog/reducers";
import { DIALOG_TYPE_CREATE } from "../redux/dialog/constants";

type Props = {
  type: DialogType,
  updateDialog: Function,
  closeDialog: Function,
  createArtist: Function,
  updateArtist: Function,
  artist: Artist,
  token: ?string
};

const ArtistDialog = ({
  type,
  updateDialog,
  closeDialog,
  createArtist,
  updateArtist,
  artist,
  token
}: Props) => {
  const handleChange = event =>
    updateDialog({ ...artist, name: event.target.value });

  const handleClick = () => {
    if (token) {
      if (type === DIALOG_TYPE_CREATE) {
        createArtist(token, artist.name);
      } else {
        updateArtist(token, artist);
      }
    }
    closeDialog();
  };

  const title = type === DIALOG_TYPE_CREATE ? "Add" : "Update";

  return (
    <Dialog data-testid="dialog" open={type != null} onClose={closeDialog}>
      <DialogTitle>{title} artist</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          value={artist.name}
          onChange={handleChange}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClick} color="primary">
          {title}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ArtistDialog;
