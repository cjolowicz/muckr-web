// @flow
import React from "react";

import SignUp from "../SignUp";
import render from "../../test/render";

describe("SignUp", () => {
  it("renders", () => {
    const { queryByText } = render(<SignUp />, { route: "/join" });
    expect(queryByText("Sign up for Muckr")).not.toBeNull();
  });
});
