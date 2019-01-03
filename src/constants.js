export const PRODUCTION = process.env.NODE_ENV === 'production';

export const STATIC_PATH = '/static';

export const WEBPACK_PATH = 'dist';
export const WEBPACK_FILE = 'js/bundle.js';
export const WEBPACK_DEV_SERVER_PORT = 7000;
export const WEBPACK_DEV_SERVER_URL = `http://localhost:${WEBPACK_DEV_SERVER_PORT}/${WEBPACK_PATH}`;
export const WEBPACK_PUBLIC_PATH = PRODUCTION ? STATIC_PATH : WEBPACK_DEV_SERVER_URL;
export const WEBPACK_LOCATION = `${WEBPACK_PUBLIC_PATH}/${WEBPACK_FILE}`;

export const { API_URL } = process.env;
export const { API_USER } = process.env;
export const { API_PASSWORD } = process.env;
export const { NODE_ENV = 'development' } = process.env;
export const { PORT = 8000 } = process.env;

export const APP_SELECTOR = 'root';
