// @flow
import React from "react";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import { mount, shallow } from "enzyme";

import { SignInBase } from "../SignIn";
import { getInstance } from "../../test/utils";
import { TOKEN } from "../../test/fixtures";
import { unsafeCast } from "../../utils";
import type { $FetchError } from "../../services/user";

const mockClasses = {
  main: "main",
  paper: "paper",
  form: "form",
  submit: "submit"
};

const mockEvent = <T>(stub): SyntheticEvent<T> =>
  unsafeCast<SyntheticEvent<T>>(stub);

describe("SignIn", () => {
  describe("initially", () => {
    it("renders main", () => {
      const wrapper = shallow(
        <SignInBase
          nextRoute="/"
          classes={mockClasses}
          onSubmit={jest.fn()}
          token={null}
          error={null}
        />
      );
      expect(wrapper).toContainMatchingElement("main");
    });
  });

  describe("handleChange", () => {
    it("updates state", () => {
      const wrapper = mount(
        <SignInBase
          nextRoute="/"
          classes={mockClasses}
          onSubmit={jest.fn()}
          token={null}
          error={null}
        />
      );

      const component = getInstance<SignInBase>(wrapper);

      expect(wrapper).toHaveState({ username: "" });

      component.handleChange(
        mockEvent<HTMLInputElement>({
          currentTarget: {
            name: "username",
            value: "john"
          }
        })
      );

      expect(wrapper).toHaveState({ username: "john" });
    });
  });

  describe("handleSubmit", () => {
    it("invokes onSubmit", async () => {
      const onSubmit = jest.fn();

      const wrapper = mount(
        <SignInBase
          nextRoute="/"
          classes={mockClasses}
          onSubmit={onSubmit}
          token={null}
          error={null}
        />
      );
      const component = getInstance<SignInBase>(wrapper);

      component.handleChange(
        mockEvent<HTMLInputElement>({
          currentTarget: {
            name: "username",
            value: "john"
          }
        })
      );

      component.handleChange(
        mockEvent<HTMLInputElement>({
          currentTarget: {
            name: "password",
            value: "secret"
          }
        })
      );

      component.handleSubmit(
        mockEvent<HTMLButtonElement>({
          preventDefault: jest.fn()
        })
      );

      expect(onSubmit).toHaveBeenLastCalledWith("john", "secret");
    });
  });

  describe("on success", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/login"]}>
        <Switch>
          <Route path="/login">
            <SignInBase
              nextRoute="/"
              classes={mockClasses}
              onSubmit={jest.fn()}
              token={TOKEN}
              error={null}
            />
          </Route>
        </Switch>
      </MemoryRouter>
    );

    it("redirects", async () => {
      const history = wrapper.find("Router").prop("history");
      expect(history.location.pathname).toEqual("/");
    });
  });

  describe("on error", () => {
    describe("HTTP 401", () => {
      const error = unsafeCast<$FetchError>({ response: { status: 401 } });
      const wrapper = mount(
        <SignInBase
          nextRoute="/"
          classes={mockClasses}
          onSubmit={jest.fn()}
          token={null}
          error={error}
        />
      );

      it("renders message", async () => {
        expect(wrapper.text()).toEqual(
          expect.stringContaining("Incorrect username or password")
        );
      });
    });

    describe("unknown error", () => {
      const error = new Error("fail");
      const wrapper = mount(
        <SignInBase
          nextRoute="/"
          classes={mockClasses}
          onSubmit={jest.fn()}
          token={null}
          error={error}
        />
      );

      it("renders message", async () => {
        expect(wrapper.text()).toEqual(
          expect.stringContaining("unknown error")
        );
      });
    });
  });
});
