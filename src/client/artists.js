// @flow
import 'isomorphic-fetch';
import { API_URL } from '../constants';
import { createTokenAuthHeader } from './auth';

// eslint-disable-next-line import/prefer-default-export
export function fetchArtists(token: string) {
  return fetch(`${API_URL}/artists`, {
    method: 'GET',
    mode: 'cors',
    headers: createTokenAuthHeader(token),
  }).then(response => response.json());
}
