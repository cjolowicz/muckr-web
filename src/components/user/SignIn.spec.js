// @flow
import React from "react";
import type { Location } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { fireEvent } from "@testing-library/react";

import { SignIn } from "./SignIn";
import * as routes from "../../routes";
import { TOKEN } from "../../utils/test/fixtures";
import { unsafeCast } from "../../utils";
import render from "../../utils/test/render";
import select from "../../utils/test/select";

const fetchToken = jest.fn();

afterEach(() => fetchToken.mockClear());

const renderSignIn = ({ token, referrer }) => {
  const location = unsafeCast<Location>(
    referrer ? { state: { referrer: { pathname: referrer } } } : {}
  );

  const utils = render(
    <Switch>
      <Route path={routes.SIGNIN}>
        <SignIn location={location} fetchToken={fetchToken} token={token} />
      </Route>
    </Switch>,
    { route: routes.SIGNIN }
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

describe("SignIn", () => {
  describe("initially", () => {
    it("renders main", () => {
      const { header } = renderSignIn({ token: null, referrer: null });
      expect(header && header.textContent).toBe("Sign in to Muckr");
    });
  });

  describe("handleUsernameChange", () => {
    it("updates state", () => {
      const { username } = renderSignIn({ token: null, referrer: null });
      fireEvent.change(username, { target: { value: "john" } });
      expect(username && username.value).toEqual("john");
    });
  });

  describe("handleSubmit", () => {
    it("invokes fetchToken", async () => {
      const { username, password, submit } = renderSignIn({
        token: null,
        referrer: null
      });

      fireEvent.change(username, { target: { value: "john" } });
      fireEvent.change(password, { target: { value: "secret" } });
      fireEvent.click(submit);

      expect(fetchToken).toHaveBeenLastCalledWith("john", "secret");
    });
  });

  describe("with token", () => {
    it("redirects to the referrer", () => {
      const { history } = renderSignIn({
        token: TOKEN,
        referrer: routes.ARTISTS
      });
      expect(history.location.pathname).toEqual(routes.ARTISTS);
    });
  });

  describe("with token but without referrer", () => {
    it("redirects to the index route", () => {
      const { history } = renderSignIn({ token: TOKEN, referrer: null });
      expect(history.location.pathname).toEqual(routes.INDEX);
    });
  });
});
