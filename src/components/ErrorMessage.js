// @flow
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";

type Props = {
  message: string
};

type State = {
  open: boolean
};

export class ErrorMessage extends React.Component<Props, State> {
  state = { open: true };

  handleClose = () => this.setState({ open: false });

  render() {
    const { message } = this.props;
    const { open } = this.state;

    return (
      <Snackbar
        open={open}
        message={message}
        autoHideDuration={3000}
        onClose={this.handleClose}
      />
    );
  }
}
