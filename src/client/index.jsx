// @flow
import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

import { just } from '../utils';
import { APP_ROOT } from '../constants';
import { App } from './components/App';

const root = just(document.querySelector(`#${APP_ROOT}`));

ReactDOM.render(<App />, root);
