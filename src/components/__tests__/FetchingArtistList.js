// @flow
import React from "react";
import { fireEvent, render, within } from "@testing-library/react";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN, ARTIST, ARTISTS } from "../../test/fixtures";

const findParentByTagName = (element, tagName) => {
  let current = element;
  while (current.tagName !== tagName && current.parentElement) {
    current = current.parentElement;
  }
  return current;
};

describe("FetchingArtistList", () => {
  describe("without token", () => {
    it("does not fetch artists", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      const removeArtist = jest.fn();
      render(
        <FetchingArtistList
          classes={{}}
          artists={null}
          isLoading={false}
          token={null}
          fetchArtists={fetchArtists}
          createArtist={createArtist}
          removeArtist={removeArtist}
        />
      );
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      const removeArtist = jest.fn();
      render(
        <FetchingArtistList
          classes={{}}
          artists={null}
          isLoading={false}
          token={TOKEN}
          fetchArtists={fetchArtists}
          createArtist={createArtist}
          removeArtist={removeArtist}
        />
      );
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on delete", () => {
    it("removes the artist", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      const removeArtist = jest.fn();
      const { getByText } = render(
        <FetchingArtistList
          classes={{}}
          artists={ARTISTS}
          isLoading={false}
          token={TOKEN}
          fetchArtists={fetchArtists}
          createArtist={createArtist}
          removeArtist={removeArtist}
        />
      );
      const artistNode = getByText(ARTIST.name);
      const listItem = findParentByTagName(artistNode, "LI");
      const deleteButton = within(listItem).getByTitle("Delete");
      fireEvent.click(deleteButton);
      expect(removeArtist).toHaveBeenCalled();
    });
  });
});
