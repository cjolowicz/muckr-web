// @flow
import React from "react";
import { mount, shallow } from "enzyme";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

import { LoginDialog, Username, Password } from "../LoginDialog";
import * as user from "../../services/user";
import { mock } from "../../test/utils";
import { unsafeCast } from "../../utils";

describe("Username", () => {
  it("contain TextField", () => {
    const wrapper = mount(<Username value="john" onChange={() => {}} />);
    expect(wrapper).toContainMatchingElement(TextField);
  });
});

describe("Password", () => {
  it("contain TextField", () => {
    const wrapper = mount(<Password value="john" onChange={() => {}} />);
    expect(wrapper).toContainMatchingElement(TextField);
  });
});

describe("LoginDialog", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe("on startup", () => {
    it("renders dialog", () => {
      const wrapper = shallow(<LoginDialog />);
      expect(wrapper).toContainMatchingElement(Dialog);
    });

    it("is closed", () => {
      const wrapper = shallow(<LoginDialog />);
      expect(wrapper).toHaveState({ open: false });
    });
  });

  describe("after handleOpen is called", () => {
    it("is open", () => {
      const wrapper = shallow(<LoginDialog />);
      const component = unsafeCast<LoginDialog>(wrapper.instance());

      component.handleOpen();

      expect(wrapper).toHaveState({ open: true });
    });
  });

  describe("after handleClose is called", () => {
    it("is closed", () => {
      const wrapper = shallow(<LoginDialog />);
      const component = unsafeCast<LoginDialog>(wrapper.instance());

      component.handleOpen();
      component.handleClose();

      expect(wrapper).toHaveState({ open: false });
    });
  });

  describe("on change", () => {
    it("updates username", () => {
      const wrapper = shallow(<LoginDialog />);
      const username = wrapper.find(Username);

      expect(wrapper).toHaveState({ username: "" });

      username.simulate("change", {
        currentTarget: {
          name: "username",
          value: "john"
        }
      });

      expect(wrapper).toHaveState({ username: "john" });
    });
  });

  describe("after handleSubmit is called", () => {
    const event = unsafeCast<SyntheticEvent<HTMLButtonElement>>({
      preventDefault: () => {}
    });

    describe("on success", () => {
      const promise = Promise.resolve();

      beforeAll(() => {
        jest.spyOn(user, "login").mockReturnValue(promise);
      });

      afterAll(() => {
        mock(user.login).mockRestore();
      });

      it("is closed", async () => {
        const wrapper = mount(<LoginDialog />);
        const component = unsafeCast<LoginDialog>(wrapper.instance());

        component.handleOpen();
        component.handleSubmit(event);

        expect(wrapper).toHaveState({ open: true });

        await promise;

        expect(wrapper).toHaveState({ open: false });
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

      it("saves error", async () => {
        const wrapper = mount(<LoginDialog />);
        const component = unsafeCast<LoginDialog>(wrapper.instance());

        component.handleOpen();
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
