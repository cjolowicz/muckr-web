// @flow
import '@babel/polyfill';

import { just } from '../utils';
import { APP_ROOT } from '../constants';
import { renderApp } from './app';

const root = just(document.querySelector(`#${APP_ROOT}`));

renderApp(root);
