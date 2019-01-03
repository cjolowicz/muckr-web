import fetchMock from 'fetch-mock';
import { API_URL } from '../../src/constants';
import {
  fetchArtists,
} from '../../src/client/artists';

// an arbitrary 32-byte sequence in hexadecimal
const TOKEN = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';

afterEach(() => {
  fetchMock.restore();
});

describe('fetchArtists', () => {
  test('returns array of artists', (done) => {
    const expected = [
    ];
    fetchMock.get(`${API_URL}/artists`, expected);
    fetchArtists(TOKEN).then((artists) => {
      expect(artists).toEqual(expected);
    });
    done();
  });
});
