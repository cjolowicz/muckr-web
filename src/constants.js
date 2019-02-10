// @flow
import { just, fromMaybe } from "./utils";

export const API_URL = just(process.env.API_URL);
export const NODE_ENV = fromMaybe("development", process.env.NODE_ENV);
export const PORT = fromMaybe("8000", process.env.PORT);
export const PRODUCTION = NODE_ENV === "production";
export const APP_ROOT = "root";
export const JSS_STYLE_ID = "jss-server-side";
export const STATIC_PATH = "/static";
export const WEBPACK_DIR = "dist";
export const WEBPACK_FILE = "js/bundle.js";
export const WEBPACK_PORT = 7000;
export const WEBPACK_URL = `http://localhost:${WEBPACK_PORT}/${WEBPACK_DIR}`;
export const WEBPACK_PUBLIC_PATH = PRODUCTION ? STATIC_PATH : WEBPACK_URL;
export const WEBPACK_LOCATION = `${WEBPACK_PUBLIC_PATH}/${WEBPACK_FILE}`;
