// @flow
import React from "react";
import { mount } from "enzyme";

import { MessageBase } from "../Message";

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
});
