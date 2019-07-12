// @flow
import React from "react";
import { fireEvent } from "@testing-library/react";

import ArtistList from "../ArtistList";
import render from "../../../utils/test/render";
import { ARTISTS, ARTIST, TOKEN } from "../../../utils/test/fixtures";

const renderArtistList = ({ artists, pending }) => {
  const openUpdateDialog = jest.fn();
  const utils = render(
    <ArtistList
      artists={artists}
      createArtist={jest.fn()}
      removeArtist={jest.fn()}
      openCreateDialog={jest.fn()}
      openUpdateDialog={openUpdateDialog}
      pending={pending}
      token={TOKEN}
    />
  );
  return { ...utils, openUpdateDialog };
};

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", () => {
      const { getByText } = renderArtistList({
        artists: ARTISTS,
        pending: false
      });
      expect(getByText(ARTISTS[0].name)).not.toBeNull();
    });

    it("renders message while loading", () => {
      const { getByText } = renderArtistList({
        artists: ARTISTS,
        pending: true
      });
      expect(getByText("Loading...")).not.toBeNull();
    });
  });

  describe("on edit", () => {
    it("opens dialog", () => {
      const { getByTitle, openUpdateDialog } = renderArtistList({
        artists: [ARTIST],
        pending: false
      });

      const editButton = getByTitle("Edit");
      fireEvent.click(editButton);
      expect(openUpdateDialog).toHaveBeenCalledWith(ARTIST);
    });
  });
});
