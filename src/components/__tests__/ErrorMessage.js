// @flow
import React from "react";
import { mount, shallow } from "enzyme";

import { ErrorMessage } from "../ErrorMessage";

describe("ErrorMessage", () => {
  const message = "lorem ipsum dolor";

  describe("on startup", () => {
    it("renders message", () => {
      const wrapper = mount(<ErrorMessage message={message} />);
      expect(wrapper.text()).toEqual(message);
    });

    it("is open", () => {
      const wrapper = shallow(<ErrorMessage message={message} />);
      expect(wrapper).toHaveState({ open: true });
    });
  });

  describe("on close", () => {
    it("is not open", () => {
      const wrapper = shallow(<ErrorMessage message={message} />);

      wrapper.simulate("close");

      expect(wrapper).toHaveState({ open: false });
    });
  });
});
