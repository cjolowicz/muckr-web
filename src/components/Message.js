// @flow
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/styles";

type Props = {
  open: boolean,
  closeMessage: Function,
  message: ?string
};

const useStyles = makeStyles(theme => ({
  close: {
    padding: theme.spacing(0.5)
  }
}));

type Event = SyntheticEvent<HTMLButtonElement>;

const Message = ({ open, closeMessage, message }: Props) => {
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
      open={open}
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

export default Message;
