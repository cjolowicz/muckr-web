// @flow
import React from "react";

import Message from "../Message";
import render from "../../test/render";

describe("Message", () => {
  const message = "lorem ipsum dolor";

  describe("on startup", () => {
    it("renders message", () => {
      const { queryByText } = render(
        <Message open closeMessage={jest.fn()} message={message} />
      );
      expect(queryByText(message)).not.toBeNull();
    });
  });
});
