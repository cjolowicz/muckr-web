// @flow
import React from "react";
import { mount } from "enzyme";

import { App } from "../App";
import * as artists from "../../artists";
import * as auth from "../../auth";
import { mock } from "../../../test-utils";

describe("renderApp", () => {
  const token =
    "a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2";
  const artist = { id: 1, name: "Artist" };
  const authPromise = Promise.resolve(token);
  const artistsPromise = Promise.resolve([artist]);

  beforeAll(() => {
    jest.spyOn(auth, "fetchToken").mockReturnValue(authPromise);
    jest.spyOn(artists, "fetchArtists").mockReturnValue(artistsPromise);
  });

  afterAll(() => {
    mock(artists.fetchArtists).mockRestore();
    mock(auth.fetchToken).mockRestore();
  });

  it("renders", () => {
    const wrapper = mount(<App />);
    return Promise.resolve().then(() => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
