// @flow
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";

import ArtistList from "../ArtistList";
import { ARTISTS, TOKEN } from "../../test/fixtures";
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
            isLoading
            token={TOKEN}
          />
        </Provider>
      );
      expect(getByText("Loading...")).not.toBeNull();
    });
  });
});
