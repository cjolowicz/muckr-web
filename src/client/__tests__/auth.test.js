// @flow
import axios from 'axios';

import {
  createTokenAuthHeader,
  fetchToken,
} from '../auth';

// an arbitrary 32-byte sequence in hexadecimal
const TOKEN = 'a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2';

describe('createTokenAuthHeader', () => {
  it('creates HTTP Token Auth header', () => {
    expect(createTokenAuthHeader(TOKEN)).toEqual(
      { Authorization: `Bearer ${TOKEN}` },
    );
  });
});

describe('fetchToken', () => {
  it('returns token', (done) => {
    const data = { token: TOKEN };
    const promise = Promise.resolve({ data });
    jest.spyOn(axios, 'post').mockReturnValue(promise);

    fetchToken('john', 'secret').then((token) => {
      expect(token).toEqual(TOKEN);
    });
    done();
  });
});
