// @flow
import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render, within } from "@testing-library/react";
import configureStore from "redux-mock-store";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN, ARTIST, ARTISTS } from "../../test/fixtures";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";

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
  const mockStore = configureStore([]);
  const state = rootReducer(undefined, noop());
  const store = mockStore(state);

  describe("without token", () => {
    it("does not fetch artists", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      const removeArtist = jest.fn();
      const openDialog = jest.fn();
      render(
        <Provider store={store}>
          <FetchingArtistList
            classes={{}}
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
            createArtist={createArtist}
            removeArtist={removeArtist}
            openDialog={openDialog}
          />
        </Provider>
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
        <Provider store={store}>
          <FetchingArtistList
            classes={{}}
            artists={null}
            isLoading={false}
            token={TOKEN}
            fetchArtists={fetchArtists}
            createArtist={createArtist}
            removeArtist={removeArtist}
            openDialog={openDialog}
          />
        </Provider>
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
        <Provider store={store}>
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
        </Provider>
      );
      const artistNode = getByText(ARTIST.name);
      const listItem = findParentByTagName(artistNode, "LI");
      const deleteButton = within(listItem).getByTitle("Delete");
      fireEvent.click(deleteButton);
      expect(removeArtist).toHaveBeenCalled();
    });
  });
});
