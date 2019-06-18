// @flow
import React from "react";
import { Provider } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";

import ArtistList from "../ArtistList";
import { ARTISTS, ARTIST, TOKEN } from "../../test/fixtures";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";

describe("ArtistList", () => {
  const mockStore = configureStore([]);
  const state = rootReducer(undefined, noop());
  const store = mockStore(state);

  describe("on success", () => {
    it("renders artists", () => {
      const createArtist = jest.fn();
      const { getByText } = render(
        <Provider store={store}>
          <ArtistList
            artists={ARTISTS}
            createArtist={createArtist}
            removeArtist={jest.fn()}
            openDialog={jest.fn()}
            isLoading={false}
            token={TOKEN}
          />
        </Provider>
      );
      expect(getByText(ARTISTS[0].name)).not.toBeNull();
    });

    it("renders message while loading", () => {
      const createArtist = jest.fn();
      const { getByText } = render(
        <Provider store={store}>
          <ArtistList
            artists={ARTISTS}
            createArtist={createArtist}
            removeArtist={jest.fn()}
            openDialog={jest.fn()}
            isLoading
            token={TOKEN}
          />
        </Provider>
      );
      expect(getByText("Loading...")).not.toBeNull();
    });
  });

  describe("on edit", () => {
    it("opens dialog", () => {
      const openDialog = jest.fn();
      const { getByTitle } = render(
        <Provider store={store}>
          <ArtistList
            artists={[ARTIST]}
            createArtist={jest.fn()}
            removeArtist={jest.fn()}
            isLoading={false}
            token={TOKEN}
            openDialog={openDialog}
          />
        </Provider>
      );

      const editButton = getByTitle("Edit");
      fireEvent.click(editButton);
      expect(openDialog).toHaveBeenCalledWith(ARTIST);
    });
  });
});
