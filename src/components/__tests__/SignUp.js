// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import SignUp from "../SignUp";
import render from "../../test/render";
import { just, unsafeCast } from "../../utils";
import { USER } from "../../test/fixtures";

const onSubmit = jest.fn();

afterEach(() => onSubmit.mockClear());

const select = <T>(container, selector): T =>
  unsafeCast<T>(just(container.querySelector(selector)));

describe("SignUp", () => {
  const setup = () => {
    const { container } = render(<SignUp onSubmit={onSubmit} user={null} />);

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
