// @flow
import React from "react";
import { mount } from "enzyme";

import ArtistList from "../ArtistList";
import * as artist from "../../services/artist";
import { mock } from "../../test/utils";
import { TOKEN } from "../../test/fixtures";

describe("ArtistList", () => {
  beforeAll(() => {
    jest.spyOn(artist, "fetchArtists");
  });

  afterAll(() => {
    mock(artist.fetchArtists).mockRestore();
  });

  describe("on success", () => {
    it("stores artists", async () => {
      const artists = [{ id: 1, name: "Artist" }];
      const promise = Promise.resolve(artists);

      mock(artist.fetchArtists).mockReturnValue(promise);

      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper).toHaveState({ artists: [] });

      await promise;

      wrapper.update();
      expect(wrapper).toHaveState({ artists });
    });

    it("renders message if no artists", async () => {
      const promise = Promise.resolve([]);

      mock(artist.fetchArtists).mockReturnValue(promise);

      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper.find("p")).toHaveText("Loading...");

      await promise;

      wrapper.update();
      expect(wrapper.find("p")).toHaveText("No artists");
    });
  });

  describe("on error", () => {
    it("stores error", async () => {
      const error = new Error("fail");
      const promise = Promise.reject(error);

      mock(artist.fetchArtists).mockReturnValue(promise);

      expect.assertions(2);

      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper).toHaveState({ error: null });

      try {
        await promise;
      } catch (unused) {
        wrapper.update();
        expect(wrapper).toHaveState({ error });
      }
    });
  });
});
