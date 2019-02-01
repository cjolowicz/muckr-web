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

describe("LoginForm", () => {
  describe("initially", () => {
    it("renders main", () => {
      const wrapper = shallow(
        <LoginFormBase
          cookies={cookies}
          history={window.history}
          classes={mockClasses}
          nextRoute="/"
        />
      );
      expect(wrapper).toContainMatchingElement("main");
    });
  });

  describe("handleChange", () => {
    it("updates state", () => {
      const wrapper = mount(
        <LoginFormBase
          cookies={cookies}
          history={window.history}
          classes={mockClasses}
          nextRoute="/"
        />
      );
      const component = unsafeCast<LoginFormBase>(wrapper.instance());
      const event = unsafeCast<SyntheticEvent<HTMLInputElement>>({
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
    const event = unsafeCast<SyntheticEvent<HTMLButtonElement>>({
      preventDefault: () => {}
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
        const mockHistory = { push: jest.fn() };
        const wrapper = mount(
          <LoginFormBase
            cookies={cookies}
            history={mockHistory}
            classes={mockClasses}
            nextRoute="/"
          />
        );
        const component = unsafeCast<LoginFormBase>(wrapper.instance());

        component.handleSubmit(event);

        await promise;
        expect(mockHistory.push).toHaveBeenLastCalledWith("/");
      });
    });

    describe("on HTTP 401", () => {
      const error = { response: { status: 401 } };
      const promise = Promise.reject(error);

      beforeAll(() => {
        jest.spyOn(user, "fetchToken").mockReturnValue(promise);
      });

      afterAll(() => {
        mock(user.fetchToken).mockRestore();
      });

      it("saves error", async () => {
        expect.assertions(2);

        const wrapper = mount(
          <LoginFormBase
            cookies={cookies}
            history={window.history}
            classes={mockClasses}
            nextRoute="/"
          />
        );
        const component = unsafeCast<LoginFormBase>(wrapper.instance());

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
      const promise = Promise.reject(error);

      beforeAll(() => {
        jest.spyOn(user, "fetchToken").mockReturnValue(promise);
      });

      afterAll(() => {
        mock(user.fetchToken).mockRestore();
      });

      it("saves error", async () => {
        expect.assertions(2);

        const wrapper = mount(
          <LoginFormBase
            cookies={cookies}
            history={window.history}
            classes={mockClasses}
            nextRoute="/"
          />
        );
        const component = unsafeCast<LoginFormBase>(wrapper.instance());

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
