// @flow
import { fetchToken } from './auth';
import { fetchArtists } from './artists';
import { API_USER, API_PASSWORD } from '../constants';

export function renderApp(root: HTMLElement) {
  return fetchToken(API_USER, API_PASSWORD)
    .then(fetchArtists)
    .then((artists) => {
      root.innerHTML = `<ul>${artists.map(artist => `<li>${artist.name}</li>`).join('')}</ul>`;
    })
    .catch((error) => {
      root.innerHTML = `error: ${error}`;
    });
}
