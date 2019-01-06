// @flow
import axios from 'axios';
import { API_URL } from '../constants';
import { createTokenAuthHeader } from './auth';

export function fetchArtists(token: string) {
  return axios.get(`${API_URL}/artists`, {
    headers: createTokenAuthHeader(token),
  }).then(response => response.data);
}
