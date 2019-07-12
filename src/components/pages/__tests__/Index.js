// @flow
import * as React from "react";

import { Index } from "../Index";
import render from "../../../utils/test/render";
import { TOKEN } from "../../../utils/test/fixtures";

describe("Index", () => {
  describe("with token", () => {
    it("does not render sign up form", () => {
      const { queryByText } = render(<Index token={TOKEN} />);
      expect(queryByText("Sign up")).toBeNull();
    });
  });
});
