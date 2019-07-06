// @flow
import artists from "../artists";
import {
  fetchArtistsSuccess,
  createArtistSuccess,
  removeArtistSuccess,
  updateArtistSuccess
} from "../../../artist/actions";
import { ARTIST, ARTISTS } from "../../../../test/fixtures";
import indexById from "../../../../utils/indexById";

describe("artists", () => {
  const state = indexById([ARTIST]);

  it("inserts fetched artists", () => {
    const action = fetchArtistsSuccess(ARTISTS);
    const result = artists(undefined, action);
    const expected = indexById(ARTISTS);
    expect(result).toEqual(expected);
  });

  it("inserts the created artist", () => {
    const action = createArtistSuccess(ARTIST);
    const result = artists(undefined, action);
    const expected = indexById([ARTIST]);
    expect(result).toEqual(expected);
  });

  it("removes the artist with the specified ID", () => {
    const action = removeArtistSuccess(ARTIST.id);
    const result = artists(state, action);
    expect(result).toEqual({});
  });

  it("updates the artist with the matching ID", () => {
    const artist = { ...ARTIST, name: "foobar" };
    const action = updateArtistSuccess(artist);
    const result = artists(state, action);
    const expected = indexById([artist]);
    expect(result).toEqual(expected);
  });
});
