// @flow
import React from "react";
import { render } from "@testing-library/react";

import { PureMessage as Message } from "../Message";

const mockClasses = { close: "close" };

describe("Message", () => {
  const message = "lorem ipsum dolor";

  describe("on startup", () => {
    it("renders message", () => {
      const { queryByText } = render(
        <Message
          open
          onClose={jest.fn()}
          message={message}
          classes={mockClasses}
        />
      );
      expect(queryByText(message)).not.toBeNull();
    });
  });
});
