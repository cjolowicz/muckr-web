// @flow
import React from "react";
import { render } from "react-testing-library";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN } from "../../test/fixtures";

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
});
