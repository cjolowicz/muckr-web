// @flow
import axios from "axios";

import { fetchArtists } from "../artist";
import { TOKEN } from "../../test/fixtures";

describe("fetchArtists", () => {
  const artist = { id: 1, name: "Artist" };
  const promise1 = Promise.resolve({ data: { token: TOKEN } });
  const promise2 = Promise.resolve({ data: [artist] });

  beforeAll(() => {
    jest.spyOn(axios, "post").mockReturnValue(promise1);
    jest.spyOn(axios, "get").mockReturnValue(promise2);
  });

  it("returns array of artists", async () => {
    const artists = await fetchArtists(TOKEN);
    expect(artists).toEqual([artist]);
  });
});
