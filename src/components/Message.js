// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";

import { closeMessage } from "../redux/message/actions";
import { message } from "../redux/selectors";

type Props = {
  closeMessage: Function,
  message: ?string
};

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

type Event = SyntheticEvent<HTMLButtonElement>;

// eslint-disable-next-line no-shadow
export const Message = ({ closeMessage, message }: Props) => {
  const classes = useStyles();

  const onClose = (event: ?Event, reason: ?string) => {
    if (reason !== "clickaway") {
      closeMessage();
    }
  };

  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={message != null}
      message={message}
      autoHideDuration={6000}
      onClose={onClose}
      action={[
        <IconButton
          key="close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ]}
    />
  );
};

export default connect(
  createStructuredSelector({ message }),
  { closeMessage }
)(Message);
