// @flow
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

type Props = {
  message: string,
  classes: Object
};

type State = {
  open: boolean
};

export class MessageBase extends React.Component<Props, State> {
  state = { open: true };

  handleClose = (
    event: ?SyntheticEvent<HTMLButtonElement>,
    reason: ?string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { message, classes } = this.props;
    const { open } = this.state;

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

export const Message = withStyles(styles)(MessageBase);
