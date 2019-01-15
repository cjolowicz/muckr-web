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
      const wrapper = shallow(
        <LoginFormBase history={window.history} nextRoute="/" />
      );
      expect(wrapper).toContainMatchingElement("form");
    });
  });

  describe("on change", () => {
    it("updates state", () => {
      const wrapper = shallow(
        <LoginFormBase history={window.history} nextRoute="/" />
      );
      const usernameField = wrapper.find("input[name='username']");

      expect(wrapper).toHaveState({ username: "" });

      usernameField.simulate("change", {
        currentTarget: {
          name: "username",
          value: "john"
        }
      });

      expect(wrapper).toHaveState({ username: "john" });
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
      const wrapper = mount(
        <LoginFormBase history={historyMock} nextRoute="/" />
      );

      wrapper.simulate("submit", {
        preventDefault: () => {}
      });

      return promise.then(() => {
        wrapper.update();
        expect(historyMock.push).toHaveBeenLastCalledWith("/");
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

      expect(wrapper).toHaveState({ error: null });

      return promise.then().catch(() => {
        wrapper.update();
        expect(wrapper).toHaveState({ error });
      });
    });
  });
});
