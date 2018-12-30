// @flow
import '@babel/polyfill';

import { fetchToken } from './auth';
import { API_USER, API_PASSWORD } from '../constants';

const element = document.querySelector('.app');

if (element != null) {
  fetchToken(API_USER, API_PASSWORD).then((token) => {
    element.innerHTML = `token: ${token}`;
  }).catch((error) => {
    element.innerHTML = `error: ${error}`;
  });
}
