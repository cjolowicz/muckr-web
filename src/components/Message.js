// @flow
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  open: boolean,
  onClose: Function,
  message: ?string,
  classes: Object
};

export const PureMessage = ({ open, onClose, message, classes }: Props) => (
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

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

export default withStyles(styles)(PureMessage);
