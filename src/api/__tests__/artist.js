// @flow
import axios from "axios";

import { fetchArtists, createArtist } from "../artist";
import { TOKEN, ARTIST } from "../../test/fixtures";

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

describe("createArtist", () => {
  const promise = Promise.resolve({ data: ARTIST });

  beforeAll(() => {
    jest.spyOn(axios, "post").mockReturnValue(promise);
  });

  it("returns artist", async () => {
    const { name } = ARTIST;
    const artist = await createArtist(TOKEN, name);
    expect(artist).toEqual(ARTIST);
  });
});
