// @flow
import React from "react";
import { fireEvent, within } from "@testing-library/react";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN, ARTIST, ARTISTS } from "../../test/fixtures";
import render from "../../test/render";

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

const renderFetchingArtistList = ({ token, artists }) => {
  const fetchArtists = jest.fn();
  const removeArtist = jest.fn();
  const utils = render(
    <FetchingArtistList
      artists={artists}
      isLoading={false}
      token={token}
      fetchArtists={fetchArtists}
      createArtist={jest.fn()}
      removeArtist={removeArtist}
      openDialog={jest.fn()}
    />
  );
  return { ...utils, fetchArtists, removeArtist };
};

describe("FetchingArtistList", () => {
  describe("without token", () => {
    it("does not fetch artists", () => {
      const { fetchArtists } = renderFetchingArtistList({
        token: null,
        artists: []
      });
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const { fetchArtists } = renderFetchingArtistList({
        artists: [],
        token: TOKEN
      });
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on delete", () => {
    it("removes the artist", () => {
      const { getByText, removeArtist } = renderFetchingArtistList({
        artists: ARTISTS,
        token: TOKEN
      });
      const artistNode = getByText(ARTIST.name);
      const listItem = findParentByTagName(artistNode, "LI");
      const deleteButton = within(listItem).getByTitle("Delete");
      fireEvent.click(deleteButton);
      expect(removeArtist).toHaveBeenCalled();
    });
  });
});
