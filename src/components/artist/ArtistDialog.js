// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

import * as api from "../../api/types";
import type { DialogType } from "../../redux/dialog/types";
import { DIALOG_TYPE_CREATE } from "../../redux/dialog/constants";
import { createArtist, updateArtist } from "../../redux/artist/operations";
import { updateDialog, closeDialog } from "../../redux/dialog/actions";
import { dialogType, dialogArtist, token } from "../../redux/selectors";

type Props = {
  type: DialogType,
  updateDialog: Function,
  closeDialog: Function,
  createArtist: Function,
  updateArtist: Function,
  artist: api.Artist,
  token: ?string
};

export const ArtistDialog = ({
  /* eslint-disable no-shadow */
  type,
  updateDialog,
  closeDialog,
  createArtist,
  updateArtist,
  artist,
  token
}: Props) => {
  /* eslint-enable */
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

export default connect(
  createStructuredSelector({
    type: dialogType,
    artist: dialogArtist,
    token
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
