// @flow
import React from "react";
import { Switch, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import { SignUp } from "../SignUp";
import * as routes from "../../routes";
import render from "../../test/render";
import { USER } from "../../test/fixtures";
import select from "../../test/select";

const createUser = jest.fn();

afterEach(() => createUser.mockClear());

const renderSignUp = ({ user }) => {
  const utils = render(
    <Switch>
      <Route path="/join">
        <SignUp createUser={createUser} user={user} />
      </Route>
    </Switch>,
    { route: "/join" }
  );

  const { container } = utils;
  return {
    ...utils,
    header: select<HTMLHeadingElement>(container, "h1"),
    username: select<HTMLInputElement>(container, "input[name='username']"),
    password: select<HTMLInputElement>(container, "input[name='password']"),
    submit: select<HTMLButtonElement>(container, "button[type='submit']")
  };
};

describe("SignUp", () => {
  describe("initially", () => {
    it("renders title", () => {
      const { header } = renderSignUp({ user: null });
      expect(header && header.textContent).toBe("Sign up for Muckr");
    });
  });

  describe("handleUsernameChange", () => {
    it("updates state", () => {
      const { username } = renderSignUp({ user: null });

      expect(username).not.toBeNull();
      if (!username) return;

      fireEvent.change(username, { target: { value: "john" } });
      expect(username && username.value).toEqual("john");
    });
  });

  describe("handlePasswordChange", () => {
    it("updates state", () => {
      const { password } = renderSignUp({ user: null });

      expect(password).not.toBeNull();
      if (!password) return;

      fireEvent.change(password, { target: { value: "secret" } });
      expect(password && password.value).toEqual("secret");
    });
  });

  describe("handleSubmit", () => {
    it("invokes createUser", async () => {
      const { username, password, submit } = renderSignUp({ user: null });

      expect(username).not.toBeNull();
      expect(password).not.toBeNull();
      expect(submit).not.toBeNull();
      if (!(username && password && submit)) return;

      fireEvent.change(username, { target: { value: "john" } });
      fireEvent.change(password, { target: { value: "secret" } });
      fireEvent.click(submit);

      expect(createUser).toHaveBeenLastCalledWith("john", "secret");
    });
  });

  describe("on success", () => {
    it("redirects to the sign in route", () => {
      const { history } = renderSignUp({ user: USER });
      expect(history.location.pathname).toEqual(routes.SIGNIN);
    });
  });
});
