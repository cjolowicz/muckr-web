// @flow
import axios from "axios";

import { fetchArtists } from "../artist";
import { TOKEN } from "../../../test/fixtures";

describe("fetchArtists", () => {
  it("returns array of artists", done => {
    jest
      .spyOn(axios, "post")
      .mockReturnValue(Promise.resolve({ data: { token: TOKEN } }));

    const artist = { id: 1, name: "Artist" };
    jest
      .spyOn(axios, "get")
      .mockReturnValue(Promise.resolve({ data: [artist] }));

    fetchArtists(TOKEN).then(artists => {
      expect(artists).toEqual([artist]);
    });

    done();
  });
});
