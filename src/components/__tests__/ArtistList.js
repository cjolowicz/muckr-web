// @flow
import React from "react";
import { render } from "react-testing-library";

import ArtistList from "../ArtistList";
import { ARTISTS, TOKEN } from "../../test/fixtures";

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", () => {
      const createArtist = jest.fn();
      const { getByText } = render(
        <ArtistList
          artists={ARTISTS}
          createArtist={createArtist}
          isLoading={false}
          token={TOKEN}
        />
      );
      expect(getByText(ARTISTS[0].name)).not.toBeNull();
    });

    it("renders message while loading", () => {
      const createArtist = jest.fn();
      const { getByText } = render(
        <ArtistList
          artists={ARTISTS}
          createArtist={createArtist}
          isLoading
          token={TOKEN}
        />
      );
      expect(getByText("Loading...")).not.toBeNull();
    });
  });
});
