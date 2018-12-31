// @flow
import fetchMock from 'fetch-mock';
import { API_URL } from '../../src/constants';
import {
  createBasicAuthHeader,
  fetchToken,
} from '../../src/client/auth';

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

describe('fetchToken', () => {
  test('returns token', (done) => {
    // an arbitrary 32-byte sequence in hexadecimal
    const expected = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';
    fetchMock.post(`${API_URL}/tokens`, { token: expected });
    fetchToken('john', 'secret').then((token) => {
      expect(token).toBe(expected);
    });
    done();
  });
});
