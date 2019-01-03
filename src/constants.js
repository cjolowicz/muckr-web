// @flow
import {
  just,
  fromMaybe,
} from './utils';

export const API_URL = just(process.env.API_URL);
export const API_USER = just(process.env.API_USER);
export const API_PASSWORD = just(process.env.API_PASSWORD);
export const NODE_ENV = fromMaybe('development', process.env.NODE_ENV);
export const PORT = fromMaybe('8000', process.env.PORT);
export const PRODUCTION = NODE_ENV === 'production';
export const APP_ROOT = 'root';
export const STATIC_PATH = '/static';
export const WEBPACK_PATH = 'dist';
export const WEBPACK_FILE = 'js/bundle.js';
export const WEBPACK_DEV_SERVER_PORT = 7000;
export const WEBPACK_DEV_SERVER_URL = `http://localhost:${WEBPACK_DEV_SERVER_PORT}/${WEBPACK_PATH}`;
export const WEBPACK_PUBLIC_PATH = PRODUCTION ? STATIC_PATH : WEBPACK_DEV_SERVER_URL;
export const WEBPACK_LOCATION = `${WEBPACK_PUBLIC_PATH}/${WEBPACK_FILE}`;
