// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import SignUp from "../SignUp";
import render from "../../test/render";
import { USER } from "../../test/fixtures";
import select from "../../test/select";

const onSubmit = jest.fn();

afterEach(() => onSubmit.mockClear());

const renderSignUp = () => {
  const { container } = render(<SignUp onSubmit={onSubmit} user={null} />);

  return {
    header: select<HTMLHeadingElement>(container, "h1"),
    username: select<HTMLInputElement>(container, "input[name='username']"),
    password: select<HTMLInputElement>(container, "input[name='password']"),
    submit: select<HTMLButtonElement>(container, "button[type='submit']")
  };
};

describe("SignUp", () => {
  describe("initially", () => {
    it("renders title", () => {
      const { header } = renderSignUp();
      expect(header && header.textContent).toBe("Sign up for Muckr");
    });
  });

  describe("handleUsernameChange", () => {
    it("updates state", () => {
      const { username } = renderSignUp();
      fireEvent.change(username, { target: { value: "john" } });
      expect(username && username.value).toEqual("john");
    });
  });

  describe("handlePasswordChange", () => {
    it("updates state", () => {
      const { password } = renderSignUp();
      fireEvent.change(password, { target: { value: "secret" } });
      expect(password && password.value).toEqual("secret");
    });
  });

  describe("handleSubmit", () => {
    it("invokes onSubmit", async () => {
      const { username, password, submit } = renderSignUp();

      fireEvent.change(username, { target: { value: "john" } });
      fireEvent.change(password, { target: { value: "secret" } });
      fireEvent.click(submit);

      expect(onSubmit).toHaveBeenLastCalledWith("john", "secret");
    });
  });

  describe("on success", () => {
    it("redirects to /login", () => {
      const { history } = render(
        <Switch>
          <Route path="/join">
            <SignUp onSubmit={onSubmit} user={USER} />
          </Route>
        </Switch>,
        { route: "/join" }
      );

      expect(history.location.pathname).toEqual("/login");
    });
  });
});
