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

describe("FetchingArtistList", () => {
  describe("without token", () => {
    it("does not fetch artists", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      const removeArtist = jest.fn();
      const openDialog = jest.fn();
      render(
        <FetchingArtistList
          classes={{}}
          artists={[]}
          isLoading={false}
          token={null}
          fetchArtists={fetchArtists}
          createArtist={createArtist}
          removeArtist={removeArtist}
          openDialog={openDialog}
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
      const openDialog = jest.fn();
      render(
        <FetchingArtistList
          classes={{}}
          artists={[]}
          isLoading={false}
          token={TOKEN}
          fetchArtists={fetchArtists}
          createArtist={createArtist}
          removeArtist={removeArtist}
          openDialog={openDialog}
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
      const openDialog = jest.fn();
      const { getByText } = render(
        <FetchingArtistList
          classes={{}}
          artists={ARTISTS}
          isLoading={false}
          token={TOKEN}
          fetchArtists={fetchArtists}
          createArtist={createArtist}
          removeArtist={removeArtist}
          openDialog={openDialog}
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
