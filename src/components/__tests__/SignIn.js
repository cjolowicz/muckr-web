// @flow
import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { render, fireEvent, cleanup } from "react-testing-library";
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

afterEach(cleanup);

const onSubmit = jest.fn();

afterEach(() => onSubmit.mockClear());

const select = <T>(container, selector): T =>
  unsafeCast<T>(just(container.querySelector(selector)));

describe("SignIn", () => {
  const setup = () => {
    const { container } = render(
      <SignIn
        nextRoute="/"
        classes={mockClasses}
        onSubmit={onSubmit}
        token={null}
      />
    );

    return {
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
});

describe("with token", () => {
  it("redirects", () => {
    const history = createMemoryHistory({ initialEntries: ["/login"] });

    render(
      <Router history={history}>
        <Switch>
          <Route path="/login">
            <SignIn
              nextRoute="/"
              classes={mockClasses}
              onSubmit={onSubmit}
              token={TOKEN}
            />
          </Route>
        </Switch>
      </Router>
    );

    expect(history.location.pathname).toEqual("/");
  });
});
