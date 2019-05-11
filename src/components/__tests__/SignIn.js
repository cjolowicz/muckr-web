// @flow
import React from "react";
import type { Location } from "react-router-dom";
import { Switch, Route, Router } from "react-router-dom";
import { render, fireEvent } from "react-testing-library";
import { createMemoryHistory } from "history";

import { PureSignIn as SignIn } from "../SignIn";
import { TOKEN } from "../../test/fixtures";
import { just, unsafeCast } from "../../utils";

const mockClasses = {
  main: "main",
  paper: "paper",
  form: "form",
  submit: "submit"
};

const onSubmit = jest.fn();

afterEach(() => onSubmit.mockClear());

const select = <T>(container, selector): T =>
  unsafeCast<T>(just(container.querySelector(selector)));

describe("SignIn", () => {
  const setupWithTokenAndReferrer = (token, pathname) => {
    const history = createMemoryHistory({ initialEntries: ["/login"] });
    const location = unsafeCast<Location>(
      pathname ? { state: { referrer: { pathname } } } : {}
    );

    const { container } = render(
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <SignIn
              location={location}
              classes={mockClasses}
              onSubmit={onSubmit}
              token={token}
            />
          </Route>
        </Switch>
      </Router>
    );

    return { container, history };
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
      expect(header.textContent).toBe("Sign in to Muckr");
    });
  });

  describe("handleUsernameChange", () => {
    it("updates state", () => {
      const { username } = setup();
      fireEvent.change(username, { target: { value: "john" } });
      expect(username.value).toEqual("john");
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
