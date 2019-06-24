// @flow
import React from "react";
import { fireEvent } from "@testing-library/react";

import ArtistList from "../ArtistList";
import render from "../../test/render";
import { ARTISTS, ARTIST, TOKEN } from "../../test/fixtures";

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", () => {
      const createArtist = jest.fn();
      const { getByText } = render(
        <ArtistList
          artists={ARTISTS}
          createArtist={createArtist}
          removeArtist={jest.fn()}
          openDialog={jest.fn()}
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
          removeArtist={jest.fn()}
          openDialog={jest.fn()}
          isLoading
          token={TOKEN}
        />
      );
      expect(getByText("Loading...")).not.toBeNull();
    });
  });

  describe("on edit", () => {
    it("opens dialog", () => {
      const openDialog = jest.fn();
      const { getByTitle } = render(
        <ArtistList
          artists={[ARTIST]}
          createArtist={jest.fn()}
          removeArtist={jest.fn()}
          isLoading={false}
          token={TOKEN}
          openDialog={openDialog}
        />
      );

      const editButton = getByTitle("Edit");
      fireEvent.click(editButton);
      expect(openDialog).toHaveBeenCalledWith(ARTIST);
    });
  });
});
