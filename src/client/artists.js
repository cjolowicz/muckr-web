// @flow
import 'isomorphic-fetch';
import { API_URL } from '../constants';
import { createTokenAuthHeader } from './auth';

export function fetchArtists(token: string) {
  return fetch(`${API_URL}/artists`, {
    method: 'GET',
    mode: 'cors',
    headers: createTokenAuthHeader(token),
  }).then(response => response.json());
}
