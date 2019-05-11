// @flow
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { render, fireEvent } from "react-testing-library";
import { createMemoryHistory } from "history";

import { PureSignUp as SignUp, styles } from "../SignUp";
import theme from "../../theme";
import { just, unsafeCast } from "../../utils";
import { USER } from "../../test/fixtures";

const mockClasses = {
  main: "main",
  paper: "paper",
  form: "form",
  submit: "submit"
};

const onSubmit = jest.fn();

afterEach(() => onSubmit.mockClear());

describe("styles", () => {
  const classes = styles(theme);

  it("uses theme", () => {
    const { main } = classes;
    expect(main.marginLeft).toEqual(theme.spacing.unit * 3);
  });
});

const select = <T>(container, selector): T =>
  unsafeCast<T>(just(container.querySelector(selector)));

describe("SignUp", () => {
  const setup = () => {
    const { container } = render(
      <SignUp classes={mockClasses} onSubmit={onSubmit} user={null} />
    );

    return {
      header: select<HTMLHeadingElement>(container, "h1"),
      username: select<HTMLInputElement>(container, "input[name='username']"),
      password: select<HTMLInputElement>(container, "input[name='password']"),
      submit: select<HTMLButtonElement>(container, "button[type='submit']")
    };
  };

  describe("initially", () => {
    it("renders title", () => {
      const { header } = setup();
      expect(header.textContent).toBe("Sign up for Muckr");
    });
  });

  describe("handleUsernameChange", () => {
    it("updates state", () => {
      const { username } = setup();
      fireEvent.change(username, { target: { value: "john" } });
      expect(username.value).toEqual("john");
    });
  });

  describe("handlePasswordChange", () => {
    it("updates state", () => {
      const { password } = setup();
      fireEvent.change(password, { target: { value: "secret" } });
      expect(password.value).toEqual("secret");
    });
  });

  describe("handleSubmit", () => {
    it("invokes onSubmit", async () => {
      const { username, password, submit } = setup();

      fireEvent.change(username, { target: { value: "john" } });
      fireEvent.change(password, { target: { value: "secret" } });
      fireEvent.click(submit);

      expect(onSubmit).toHaveBeenLastCalledWith("john", "secret");
    });
  });

  describe("on success", () => {
    it("redirects to /login", () => {
      const history = createMemoryHistory({ initialEntries: ["/join"] });

      render(
        <Router history={history}>
          <Switch>
            <Route path="/join">
              <SignUp classes={mockClasses} onSubmit={onSubmit} user={USER} />
            </Route>
          </Switch>
        </Router>
      );

      expect(history.location.pathname).toEqual("/login");
    });
  });
});
