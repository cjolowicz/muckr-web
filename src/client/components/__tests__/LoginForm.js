// @flow
import React from "react";
import { mount, shallow } from "enzyme";

import { LoginFormBase } from "../LoginForm";
import * as user from "../../services/user";
import { mock } from "../../../test/utils";

describe("LoginForm", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("on startup", () => {
    it("displays form", () => {
      const loginForm = shallow(
        <LoginFormBase history={window.history} nextRoute="/" />
      );
      expect(loginForm.find("form")).toHaveLength(1);
    });
  });

  describe("on change", () => {
    it("updates state", () => {
      const loginForm = shallow(
        <LoginFormBase history={window.history} nextRoute="/" />
      );
      const usernameField = loginForm.find("input[name='username']");

      expect(loginForm.state().username).toEqual("");

      usernameField.simulate("change", {
        currentTarget: {
          name: "username",
          value: "john"
        }
      });

      expect(loginForm.state().username).toEqual("john");
    });
  });

  describe("on success", () => {
    const promise = Promise.resolve();

    beforeAll(() => {
      jest.spyOn(user, "login").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(user.login).mockRestore();
    });

    it("redirects", () => {
      const historyMock = { push: jest.fn() };
      const loginForm = mount(
        <LoginFormBase history={historyMock} nextRoute="/" />
      );

      loginForm.simulate("submit", {
        preventDefault: () => {}
      });

      return promise.then(() => {
        loginForm.update();
        expect(historyMock.push.mock.calls[0]).toEqual(["/"]);
      });
    });
  });

  describe("on error", () => {
    const error = new Error("fail");
    const promise = Promise.reject(error);

    beforeAll(() => {
      jest.spyOn(user, "login").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(user.login).mockRestore();
    });

    it("redirects", () => {
      expect.assertions(2);

      const wrapper = mount(
        <LoginFormBase history={window.history} nextRoute="/" />
      );

      wrapper.simulate("submit", {
        preventDefault: () => {}
      });

      expect(wrapper.state().error).toBeNull();

      return promise.then().catch(() => {
        wrapper.update();
        expect(wrapper.state().error).toBe(error);
      });
    });
  });
});
