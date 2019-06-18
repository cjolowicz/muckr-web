// @flow
import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { render } from "@testing-library/react";

import Message from "../Message";
import theme from "../../theme";

describe("Message", () => {
  const message = "lorem ipsum dolor";

  describe("on startup", () => {
    it("renders message", () => {
      const { queryByText } = render(
        <ThemeProvider theme={theme}>
          <Message open onClose={jest.fn()} message={message} />
        </ThemeProvider>
      );
      expect(queryByText(message)).not.toBeNull();
    });
  });
});
