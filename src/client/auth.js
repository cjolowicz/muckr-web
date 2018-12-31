// @flow
import 'isomorphic-fetch';

export default function createBasicAuthHeader(username: string, password: string) {
  const base64 = btoa(`${username}:${password}`);

  return new Headers({
    Authorization: `Basic ${base64}`,
  });
}
