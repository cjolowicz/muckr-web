// @flow
import fetchMock from 'fetch-mock';
import { API_URL } from '../../src/constants';
import {
  createBasicAuthHeader,
  createTokenAuthHeader,
  fetchToken,
} from '../../src/client/auth';

// an arbitrary 32-byte sequence in hexadecimal
const TOKEN = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';

afterEach(() => {
  fetchMock.restore();
});

describe('createBasicAuthHeader', () => {
  const headers = createBasicAuthHeader('john', 'secret');

  test('creates HTTP Basic Auth header', () => {
    expect(headers.get('Authorization')).toEqual(
      'Basic am9objpzZWNyZXQ=',
    );
  });
});

describe('createTokenAuthHeader', () => {
  const headers = createTokenAuthHeader(TOKEN);

  test('creates HTTP Token Auth header', () => {
    expect(headers.get('Authorization')).toEqual(
      `Bearer ${TOKEN}`,
    );
  });
});

describe('fetchToken', () => {
  test('returns token', (done) => {
    fetchMock.post(`${API_URL}/tokens`, { token: TOKEN });
    fetchToken('john', 'secret').then((token) => {
      expect(token).toEqual(TOKEN);
    });
    done();
  });
});
