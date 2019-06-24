// @flow
import React from "react";
import { fireEvent } from "@testing-library/react";

import ArtistList from "../ArtistList";
import render from "../../test/render";
import { ARTISTS, ARTIST, TOKEN } from "../../test/fixtures";

const renderArtistList = ({ artists, isLoading }) => {
  const openDialog = jest.fn();
  const utils = render(
    <ArtistList
      artists={artists}
      createArtist={jest.fn()}
      removeArtist={jest.fn()}
      openDialog={openDialog}
      isLoading={isLoading}
      token={TOKEN}
    />
  );
  return { ...utils, openDialog };
};

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", () => {
      const { getByText } = renderArtistList({
        artists: ARTISTS,
        isLoading: false
      });
      expect(getByText(ARTISTS[0].name)).not.toBeNull();
    });

    it("renders message while loading", () => {
      const { getByText } = renderArtistList({
        artists: ARTISTS,
        isLoading: true
      });
      expect(getByText("Loading...")).not.toBeNull();
    });
  });

  describe("on edit", () => {
    it("opens dialog", () => {
      const { getByTitle, openDialog } = renderArtistList({
        artists: [ARTIST],
        isLoading: false
      });

      const editButton = getByTitle("Edit");
      fireEvent.click(editButton);
      expect(openDialog).toHaveBeenCalledWith(ARTIST);
    });
  });
});
