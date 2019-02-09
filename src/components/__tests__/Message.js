// @flow
import React from "react";
import { mount, shallow } from "enzyme";

import { MessageBase } from "../Message";
import { getInstance } from "../../test/utils";

const mockClasses = { close: "close" };

describe("Message", () => {
  const message = "lorem ipsum dolor";

  describe("on startup", () => {
    it("renders message", () => {
      const wrapper = mount(
        <MessageBase message={message} classes={mockClasses} />
      );
      expect(wrapper.text()).toEqual(message);
    });

    it("is open", () => {
      const wrapper = shallow(
        <MessageBase message={message} classes={mockClasses} />
      );
      expect(wrapper).toHaveState({ open: true });
    });
  });

  describe("on close", () => {
    it("is not open", () => {
      const wrapper = shallow(
        <MessageBase message={message} classes={mockClasses} />
      );
      const component = getInstance<MessageBase>(wrapper);

      component.handleClose();

      expect(wrapper).toHaveState({ open: false });
    });

    it("ignores clickaway", () => {
      const wrapper = shallow(
        <MessageBase message={message} classes={mockClasses} />
      );
      const component = getInstance<MessageBase>(wrapper);

      component.handleClose(undefined, "clickaway");

      expect(wrapper).toHaveState({ open: true });
    });
  });
});
