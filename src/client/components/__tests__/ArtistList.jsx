// @flow
import React from "react";
import { mount } from "enzyme";

import { ArtistList } from "../ArtistList";
import * as artists from "../../artists";
import { mock } from "../../../test-utils";
import { TOKEN } from "../../../test/fixtures";

describe("ArtistList", () => {
  describe("on success", () => {
    const artist = { id: 1, name: "Artist" };
    const promise = Promise.resolve([artist]);

    beforeAll(() => {
      jest.spyOn(artists, "fetchArtists").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(artists.fetchArtists).mockRestore();
    });

    test("stores artists", () => {
      const wrapper = mount(<ArtistList token={TOKEN} />);

      expect(wrapper.state().artists).toEqual([]);

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.state().artists).toEqual([artist]);
      });
    });
  });
});
