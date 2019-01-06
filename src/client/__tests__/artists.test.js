// @flow
import axios from 'axios';

import { fetchArtists } from '../artists';

// an arbitrary 32-byte sequence in hexadecimal
const TOKEN = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';

describe('fetchArtists', () => {
  test('returns array of artists', (done) => {
    jest.spyOn(axios, 'post').mockReturnValue(
      Promise.resolve({ data: { token: TOKEN } }),
    );

    const artist = { id: 1, name: 'Artist' };
    jest.spyOn(axios, 'get').mockReturnValue(
      Promise.resolve({ data: [artist] }),
    );

    fetchArtists(TOKEN).then((artists) => {
      expect(artists).toEqual([artist]);
    });

    done();
  });
});
