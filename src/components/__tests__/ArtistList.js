// @flow
import React from "react";
import { render } from "react-testing-library";

import ArtistList from "../ArtistList";
import { ARTISTS } from "../../test/fixtures";

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", () => {
      const { getByText } = render(
        <ArtistList artists={ARTISTS} isLoading={false} />
      );
      expect(getByText(ARTISTS[0].name)).not.toBeNull();
    });

    it("renders message while loading", () => {
      const { getByText } = render(<ArtistList artists={ARTISTS} isLoading />);
      expect(getByText("Loading...")).not.toBeNull();
    });
  });
});
