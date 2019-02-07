// @flow
import React from "react";
import { mount, shallow } from "enzyme";
import { Cookies } from "react-cookie";

import { LoginFormBase } from "../LoginForm";
import * as user from "../../services/user";
import { mock } from "../../test/utils";

const cookies = new Cookies();

describe("LoginForm", () => {
  describe("on startup", () => {
    it("displays form", () => {
      const wrapper = shallow(
        <LoginFormBase
          cookies={cookies}
          history={window.history}
          nextRoute="/"
        />
      );
      expect(wrapper).toContainMatchingElement("form");
    });
  });

  describe("on change", () => {
    it("updates state", () => {
      const wrapper = shallow(
        <LoginFormBase
          cookies={cookies}
          history={window.history}
          nextRoute="/"
        />
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
      jest.spyOn(user, "fetchToken").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(user.fetchToken).mockRestore();
    });

    it("redirects", async () => {
      const historyMock = { push: jest.fn() };
      const wrapper = mount(
        <LoginFormBase cookies={cookies} history={historyMock} nextRoute="/" />
      );

      wrapper.simulate("submit", {
        preventDefault: () => {}
      });

      await promise;

      wrapper.update();
      expect(historyMock.push).toHaveBeenLastCalledWith("/");
    });
  });

  describe("on error", () => {
    const error = new Error("fail");
    const promise = Promise.reject(error);

    beforeAll(() => {
      jest.spyOn(user, "fetchToken").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(user.fetchToken).mockRestore();
    });

    it("redirects", async () => {
      expect.assertions(2);

      const wrapper = mount(
        <LoginFormBase
          cookies={cookies}
          history={window.history}
          nextRoute="/"
        />
      );

      wrapper.simulate("submit", {
        preventDefault: () => {}
      });

      expect(wrapper).toHaveState({ error: null });

      try {
        await promise;
      } catch (unused) {
        wrapper.update();
        expect(wrapper).toHaveState({ error });
      }
    });
  });
});
