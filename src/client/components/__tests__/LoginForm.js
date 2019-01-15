// @flow
import React from "react";
import { mount, shallow } from "enzyme";

import { LoginFormBase } from "../LoginForm";
import * as user from "../../services/user";
import { mock } from "../../../test/utils";
import { TOKEN } from "../../../test/fixtures";

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

  describe("on submit", () => {
    const promise = Promise.resolve(TOKEN);

    beforeAll(() => {
      jest.spyOn(user, "fetchToken").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(user.fetchToken).mockRestore();
    });

    it("stores token", () => {
      const loginForm = mount(
        <LoginFormBase history={window.history} nextRoute="/" />
      );

      expect(localStorage.getItem("token")).toBeNull();

      loginForm.simulate("submit", {
        preventDefault: () => {}
      });

      return promise.then(() => {
        loginForm.update();
        expect(localStorage.getItem("token")).toEqual(TOKEN);
      });
    });
  });
});
