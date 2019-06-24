// @flow
import React from "react";
import type { Location } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import SignIn from "../SignIn";
import { TOKEN } from "../../test/fixtures";
import { unsafeCast } from "../../utils";
import render from "../../test/render";
import select from "../../test/select";

const onSubmit = jest.fn();

afterEach(() => onSubmit.mockClear());

describe("SignIn", () => {
  const setupWithTokenAndReferrer = (token, pathname) => {
    const location = unsafeCast<Location>(
      pathname ? { state: { referrer: { pathname } } } : {}
    );

    return render(
      <Switch>
        <Route path="/login">
          <SignIn location={location} onSubmit={onSubmit} token={token} />
        </Route>
      </Switch>,
      { route: "/login" }
    );
  };

  const setup = () => {
    const { container, history } = setupWithTokenAndReferrer(null, null);

    return {
      history,
      header: select<HTMLHeadingElement>(container, "h1"),
      username: select<HTMLInputElement>(container, "input[name='username']"),
      password: select<HTMLInputElement>(container, "input[name='password']"),
      submit: select<HTMLButtonElement>(container, "button[type='submit']")
    };
  };

  describe("initially", () => {
    it("renders main", () => {
      const { header } = setup();
      expect(header && header.textContent).toBe("Sign in to Muckr");
    });
  });

  describe("handleUsernameChange", () => {
    it("updates state", () => {
      const { username } = setup();
      fireEvent.change(username, { target: { value: "john" } });
      expect(username && username.value).toEqual("john");
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

  describe("with token", () => {
    it("redirects", () => {
      const { history } = setupWithTokenAndReferrer(TOKEN, "/artists");
      expect(history.location.pathname).toEqual("/artists");
    });
  });

  describe("with token but without referrer", () => {
    it("redirects to /", () => {
      const { history } = setupWithTokenAndReferrer(TOKEN, null);
      expect(history.location.pathname).toEqual("/");
    });
  });
});
