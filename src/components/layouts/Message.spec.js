// @flow
import React from "react";
import { fireEvent } from "@testing-library/react";

import { Message } from "./Message";
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

  describe("when close button is clicked", () => {
    it("triggers closeMessage", () => {
      const closeMessage = jest.fn();
      const { queryByLabelText } = render(
        <Message closeMessage={closeMessage} message={message} />
      );
      const button = queryByLabelText("Close");
      fireEvent.click(button);
      expect(closeMessage).toHaveBeenCalled();
    });
  });

  describe("when clicked away", () => {
    it("does not trigger closeMessage", () => {
      const closeMessage = jest.fn();
      const { queryByText } = render(
        <>
          <div>Some other UI element</div>
          <Message closeMessage={closeMessage} message={message} />
        </>
      );
      const otherElement = queryByText("Some other UI element");
      fireEvent.click(otherElement);
      expect(closeMessage).not.toHaveBeenCalled();
    });
  });
});
