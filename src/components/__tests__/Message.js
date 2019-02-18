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
        <MessageBase
          open
          onClose={jest.fn()}
          message={message}
          classes={mockClasses}
        />
      );
      expect(wrapper.text()).toEqual(message);
    });
  });

  describe("on close", () => {
    it("invokes onClose", () => {
      const onClose = jest.fn();
      const wrapper = shallow(
        <MessageBase
          open
          onClose={onClose}
          message={message}
          classes={mockClasses}
        />
      );
      const component = getInstance<MessageBase>(wrapper);

      component.handleClose();

      expect(onClose).toHaveBeenCalled();
    });

    it("ignores clickaway", () => {
      const onClose = jest.fn();
      const wrapper = shallow(
        <MessageBase
          open
          onClose={onClose}
          message={message}
          classes={mockClasses}
        />
      );
      const component = getInstance<MessageBase>(wrapper);

      component.handleClose(undefined, "clickaway");

      expect(onClose).not.toHaveBeenCalled();
    });
  });
});
