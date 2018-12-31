// @flow
import createBasicAuthHeader from '../../src/client/auth';

describe('createBasicAuthHeader', () => {
  const headers = createBasicAuthHeader('john', 'secret');

  test('creates HTTP Basic Auth header', () => {
    expect(headers.get('Authorization')).toEqual(
      'Basic am9objpzZWNyZXQ=',
    );
  });
});
