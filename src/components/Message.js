// @flow
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  open: boolean,
  onClose: Function,
  message: string,
  classes: Object
};

export class MessageBase extends React.Component<Props> {
  handleClose = (
    event: ?SyntheticEvent<HTMLButtonElement>,
    reason: ?string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    const { onClose } = this.props;

    onClose();
  };

  render() {
    const { open, message, classes } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        message={message}
        autoHideDuration={6000}
        onClose={this.handleClose}
        action={[
          <IconButton
            key="close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

export default withStyles(styles)(MessageBase);
