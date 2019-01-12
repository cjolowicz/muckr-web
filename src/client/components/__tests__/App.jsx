// @flow
import React from "react";
import { mount } from "enzyme";

import { App } from "../App";
import * as artists from "../../artists";
import * as auth from "../../auth";
import { mock } from "../../../test-utils";
import { TOKEN } from "../../../test/fixtures";

describe("renderApp", () => {
  const artist = { id: 1, name: "Artist" };
  const authPromise = Promise.resolve(TOKEN);
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
