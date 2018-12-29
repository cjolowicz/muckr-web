export const PRODUCTION = process.env.NODE_ENV === 'production';

export const STATIC_PATH = '/static';

export const WEBPACK_PATH = 'dist';
export const WEBPACK_FILE = 'js/bundle.js';
export const WEBPACK_DEV_SERVER_PORT = 7000;
export const WEBPACK_DEV_SERVER_URL = `http://localhost:${WEBPACK_DEV_SERVER_PORT}/${WEBPACK_PATH}`;
export const WEBPACK_PUBLIC_PATH = PRODUCTION ? STATIC_PATH : WEBPACK_DEV_SERVER_URL;
export const WEBPACK_LOCATION = `${WEBPACK_PUBLIC_PATH}/${WEBPACK_FILE}`;
