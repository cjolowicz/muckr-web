// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

import * as api from "../../api/types";
import type { DialogType } from "../../redux/dialog/types";
import { DIALOG_TYPE_CREATE } from "../../redux/dialog/constants";
import { createArtist, updateArtist } from "../../redux/artist/operations";
import { updateDialog, closeDialog } from "../../redux/dialog/actions";
import {
  dialogOpen,
  dialogType,
  dialogArtist,
  token
} from "../../redux/selectors";

type Props = {
  open: boolean,
  type: DialogType,
  updateDialog: Function,
  closeDialog: Function,
  createArtist: Function,
  updateArtist: Function,
  artist: api.Artist,
  token: ?string
};

const useStyles = makeStyles(theme => ({
  paper: {
    width: "auto",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3 * 2))]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

export const ArtistDialog = ({
  /* eslint-disable no-shadow */
  open,
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

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const title = type === DIALOG_TYPE_CREATE ? "Add" : "Update";
  const classes = useStyles();

  return (
    <Dialog
      data-testid="dialog"
      open={open}
      onClose={closeDialog}
      classes={{ paper: classes.paper }}
    >
      <DialogTitle disableTypography>
        <Typography variant="h6">{title} artist</Typography>
        <IconButton
          aria-label="Close"
          className={classes.closeButton}
          onClick={closeDialog}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          value={artist.name}
          onChange={handleChange}
          onKeyPress={handleKeyPress}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClick} color="primary">
          {title}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default connect(
  createStructuredSelector({
    open: dialogOpen,
    type: dialogType,
    artist: dialogArtist,
    token
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
