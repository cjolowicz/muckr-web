// @flow
import '@babel/polyfill';

import { just } from '../utils';
import { fetchToken } from './auth';
import { fetchArtists } from './artists';
import { API_USER, API_PASSWORD, APP_ROOT } from '../constants';

const element = just(document.querySelector(`#${APP_ROOT}`));

fetchToken(API_USER, API_PASSWORD)
  .then(fetchArtists)
  .then((artists) => {
    element.innerHTML = `<ul>${artists.map(artist => `<li>${artist.name}</li>`).join('')}</ul>`;
  })
  .catch((error) => {
    element.innerHTML = `error: ${error}`;
  });
