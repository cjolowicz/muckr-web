// @flow
import React from "react";
import { mount } from "enzyme";

import { ArtistList } from "../ArtistList";
import * as artists from "../../artists";
import { mock } from "../../../test-utils";

describe("ArtistList", () => {
  describe("on success", () => {
    const token =
      "a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2";
    const artist = { id: 1, name: "Artist" };
    const promise = Promise.resolve([artist]);

    beforeAll(() => {
      jest.spyOn(artists, "fetchArtists").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(artists.fetchArtists).mockRestore();
    });

    test("stores artists", () => {
      const wrapper = mount(<ArtistList token={token} />);

      expect(wrapper.state().artists).toEqual([]);

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.state().artists).toEqual([artist]);
      });
    });
  });
});
