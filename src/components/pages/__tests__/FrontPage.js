// @flow
import * as React from "react";

import { FrontPage } from "../FrontPage";
import render from "../../../utils/test/render";
import { TOKEN } from "../../../utils/test/fixtures";

describe("FrontPage", () => {
  describe("with token", () => {
    it("does not render sign up form", () => {
      const { queryByText } = render(<FrontPage token={TOKEN} />);
      expect(queryByText("Sign up")).toBeNull();
    });
  });
});
