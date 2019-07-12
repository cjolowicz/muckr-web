// @flow
import React from "react";

import { Message } from "../Message";
import render from "../../utils/test/render";

describe("Message", () => {
  const message = "lorem ipsum dolor";

  describe("on startup", () => {
    it("renders message", () => {
      const { queryByText } = render(
        <Message closeMessage={jest.fn()} message={message} />
      );
      expect(queryByText(message)).not.toBeNull();
    });
  });
});
