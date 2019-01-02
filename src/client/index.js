// @flow
import '@babel/polyfill';

import { fetchToken } from './auth';
import { fetchArtists } from './artists';
import { API_USER, API_PASSWORD } from '../constants';

const element = document.querySelector('.app');

if (element != null) {
  fetchToken(API_USER, API_PASSWORD)
    .then(fetchArtists)
    .then((artists) => {
      element.innerHTML = JSON.stringify(artists);
    })
    .catch((error) => {
      element.innerHTML = `error: ${error}`;
    });
}
