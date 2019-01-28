// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";

import { ErrorMessage } from "./ErrorMessage";
import { login } from "../services/user";

type UsernameProps = {
  value: string,
  onChange: Function
};

export const Username = ({ value, onChange }: UsernameProps) => (
  <TextField
    name="username"
    type="text"
    value={value}
    placeholder="Username"
    autoFocus
    fullWidth
    margin="dense"
    onChange={onChange}
  />
);

type PasswordProps = UsernameProps;

export const Password = ({ value, onChange }: PasswordProps) => (
  <TextField
    name="password"
    type="password"
    value={value}
    placeholder="Password"
    fullWidth
    margin="dense"
    onChange={onChange}
  />
);

type State = {
  open: boolean,
  username: string,
  password: string,
  error: ?Error
};

type HTMLButtonEvent = SyntheticEvent<HTMLButtonElement>;

export class LoginDialog extends React.Component<{}, State> {
  state = { open: false, username: "", password: "", error: null };

  handleOpen = () => this.setState({ open: true });

  handleClose = () => this.setState({ open: false });

  handleChange = ({
    currentTarget: { name, value }
  }: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [name]: value });
  };

  handleSubmit = async (event: HTMLButtonEvent) => {
    const { username, password } = this.state;

    this.setState({ error: null });

    try {
      await login(username, password);
      this.setState({ open: false });
    } catch (error) {
      this.setState({ error });
    }

    event.preventDefault();
  };

  render() {
    const { open, username, password, error } = this.state;
    const disabled = !username.length || !password.length;

    return (
      <>
        <Button variant="contained" onClick={this.handleOpen}>
          Login
        </Button>
        <Dialog open={open} onClose={this.handleClose}>
          <DialogContent>
            <Username value={username} onChange={this.handleChange} />
            <Password value={password} onChange={this.handleChange} />
            <Button
              disabled={disabled}
              fullWidth
              color="primary"
              onClick={this.handleSubmit}
            >
              Login
            </Button>
          </DialogContent>
        </Dialog>
        {error ? <ErrorMessage message={error.message} /> : null}
      </>
    );
  }
}
