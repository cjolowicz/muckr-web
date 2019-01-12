// @flow
import React from "react";
import { mount } from "enzyme";

import { ArtistList } from "../ArtistList";
import * as artists from "../../artists";
import { mock } from "../../../test/utils";
import { TOKEN } from "../../../test/fixtures";

describe("ArtistList", () => {
  beforeAll(() => {
    jest.spyOn(artists, "fetchArtists");
  });

  afterAll(() => {
    mock(artists.fetchArtists).mockRestore();
  });

  describe("on success", () => {
    it("stores artists", () => {
      const artist = { id: 1, name: "Artist" };
      const promise = Promise.resolve([artist]);

      mock(artists.fetchArtists).mockReturnValue(promise);

      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper.state().artists).toEqual([]);

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.state().artists).toEqual([artist]);
      });
    });

    it("renders message if no artists", () => {
      const promise = Promise.resolve([]);

      mock(artists.fetchArtists).mockReturnValue(promise);

      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper.find("p").text()).toEqual("Loading...");

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.find("p").text()).toEqual("No artists");
      });
    });
  });

  describe("on error", () => {
    it("stores error", () => {
      const error = new Error("fail");
      const promise = Promise.reject(error);

      mock(artists.fetchArtists).mockReturnValue(promise);

      expect.assertions(2);

      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper.state().error).toBeNull();

      return promise.then().catch(() => {
        wrapper.update();
        expect(wrapper.state().error).toBe(error);
      });
    });
  });
});
