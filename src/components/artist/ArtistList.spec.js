// @flow
import React from "react";
import { fireEvent, within } from "@testing-library/react";

import { ArtistList } from "./ArtistList";
import render from "../../utils/test/render";
import { ARTISTS, ARTIST, TOKEN } from "../../utils/test/fixtures";
import type { Artist } from "../../api/types";

const findParentByTagName = (element: HTMLElement, tagName) => {
  let current = element;
  while (
    current.tagName !== tagName &&
    current.parentElement instanceof HTMLElement
  ) {
    current = current.parentElement;
  }
  return current;
};

type Options = {
  token?: ?string,
  artists?: Array<Artist>
};

const renderArtistList = (options?: Options) => {
  const { token = TOKEN, artists = ARTISTS } = options || {};

  const fetchArtists = jest.fn();
  const removeArtist = jest.fn();
  const openUpdateDialog = jest.fn();
  const utils = render(
    <ArtistList
      artists={artists}
      pending={false}
      token={token}
      fetchArtists={fetchArtists}
      createArtist={jest.fn()}
      removeArtist={removeArtist}
      openCreateDialog={jest.fn()}
      openUpdateDialog={openUpdateDialog}
    />
  );
  return { ...utils, fetchArtists, removeArtist, openUpdateDialog };
};

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", () => {
      const { getByText } = renderArtistList();
      expect(getByText(ARTISTS[0].name)).not.toBeNull();
    });
  });

  describe("on edit", () => {
    it("opens dialog", () => {
      const { getByTitle, openUpdateDialog } = renderArtistList({
        artists: [ARTIST]
      });

      const editButton = getByTitle("Edit");
      fireEvent.click(editButton);
      expect(openUpdateDialog).toHaveBeenCalledWith(ARTIST);
    });
  });

  describe("without token", () => {
    it("does not fetch artists", () => {
      const { fetchArtists } = renderArtistList({
        token: null
      });
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const { fetchArtists } = renderArtistList();
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on delete", () => {
    it("removes the artist", () => {
      const { getByText, removeArtist } = renderArtistList();
      const artistNode = getByText(ARTIST.name);
      const listItem = findParentByTagName(artistNode, "LI");
      const deleteButton = within(listItem).getByTitle("Delete");
      fireEvent.click(deleteButton);
      expect(removeArtist).toHaveBeenCalled();
    });
  });
});
