// @flow
import React from "react";
import { mount, shallow } from "enzyme";
import { Cookies } from "react-cookie";

import { LoginFormBase } from "../LoginForm";
import * as user from "../../services/user";
import { mock } from "../../test/utils";
import { unsafeCast } from "../../utils";

const mockClasses = {
  main: "main",
  paper: "paper",
  form: "form",
  submit: "submit"
};

const cookies = new Cookies();

const createLoginForm = history => (
  <LoginFormBase
    cookies={cookies}
    history={history || window.history}
    classes={mockClasses}
    nextRoute="/"
  />
);

function getInstance<T>(wrapper): T {
  return unsafeCast<T>(wrapper.instance());
}

function mockEvent<T>(stub): SyntheticEvent<T> {
  return unsafeCast<SyntheticEvent<T>>(stub);
}

const mockFetchToken = promise => {
  beforeAll(() => {
    jest.spyOn(user, "fetchToken").mockReturnValue(promise);
  });

  afterAll(() => {
    mock(user.fetchToken).mockRestore();
  });

  return promise;
};

describe("LoginForm", () => {
  describe("initially", () => {
    it("renders main", () => {
      const wrapper = shallow(createLoginForm());
      expect(wrapper).toContainMatchingElement("main");
    });
  });

  describe("handleChange", () => {
    it("updates state", () => {
      const wrapper = mount(createLoginForm());
      const component = getInstance<LoginFormBase>(wrapper);
      const event = mockEvent<HTMLInputElement>({
        currentTarget: {
          name: "username",
          value: "john"
        }
      });

      expect(wrapper).toHaveState({ username: "" });

      component.handleChange(event);

      expect(wrapper).toHaveState({ username: "john" });
    });
  });

  describe("handleSubmit", () => {
    const event = mockEvent<HTMLButtonElement>({
      preventDefault: () => {}
    });

    describe("on success", () => {
      const promise = mockFetchToken(Promise.resolve());

      it("redirects", async () => {
        const mockHistory = { push: jest.fn() };
        const wrapper = mount(createLoginForm(mockHistory));
        const component = getInstance<LoginFormBase>(wrapper);

        component.handleSubmit(event);

        await promise;
        expect(mockHistory.push).toHaveBeenLastCalledWith("/");
      });
    });

    describe("on HTTP 401", () => {
      const error = { response: { status: 401 } };
      const promise = mockFetchToken(Promise.reject(error));

      it("saves error", async () => {
        expect.assertions(2);

        const wrapper = mount(createLoginForm());
        const component = getInstance<LoginFormBase>(wrapper);

        component.handleSubmit(event);

        expect(wrapper).toHaveState({ error: null });

        try {
          await promise;
        } catch (unused) {
          expect(wrapper).toHaveState({ error });
        }
      });
    });

    describe("on error", () => {
      const error = new Error("fail");
      const promise = mockFetchToken(Promise.reject(error));

      it("saves error", async () => {
        expect.assertions(2);

        const wrapper = mount(createLoginForm());
        const component = getInstance<LoginFormBase>(wrapper);

        component.handleSubmit(event);

        expect(wrapper).toHaveState({ error: null });

        try {
          await promise;
        } catch (unused) {
          expect(wrapper).toHaveState({ error });
        }
      });
    });
  });
});
