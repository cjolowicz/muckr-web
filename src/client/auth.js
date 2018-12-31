// @flow
import 'isomorphic-fetch';
import { API_URL } from '../constants';

export function createBasicAuthHeader(username: string, password: string) {
  const base64 = btoa(`${username}:${password}`);

  return new Headers({
    Authorization: `Basic ${base64}`,
  });
}

export function fetchToken(username: string, password: string) {
  return fetch(`${API_URL}/tokens`, {
    method: 'POST',
    mode: 'cors',
    headers: createBasicAuthHeader(username, password),
  }).then(response => response.json())
    .then(data => data.token);
}
