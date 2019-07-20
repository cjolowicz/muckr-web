// @flow
import React from "react";

import { Spinner } from "./Spinner";
import render from "../../utils/test/render";

const renderSpinner = spinner => {
  const utils = render(<Spinner className="spinner" spinner={spinner} />);
  return { spinner: utils.queryByTestId("spinner"), ...utils };
};

describe("Spinner", () => {
  describe("when spinner prop is false", () => {
    it("is not present", () => {
      const { spinner } = renderSpinner(false);
      expect(spinner).toBeNull();
    });
  });

  describe("when spinner prop is true", () => {
    it("is present and visible", () => {
      const { spinner } = renderSpinner(true);
      expect(spinner).toBeVisible();
    });
  });
});
