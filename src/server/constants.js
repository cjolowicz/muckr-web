// @flow
import { fromMaybe } from "../utils";

export const NODE_ENV = fromMaybe("development", process.env.NODE_ENV);
export const PORT = fromMaybe("8000", process.env.PORT);
export const STATIC_PATH = "/static";
export const WEBPACK_DIR = "dist";

const WEBPACK_FILE = "js/bundle.js";
const WEBPACK_URL = "http://localhost:7000/dist";
const WEBPACK_PUBLIC_PATH =
  NODE_ENV === "production" ? STATIC_PATH : WEBPACK_URL;

export const WEBPACK_LOCATION = `${WEBPACK_PUBLIC_PATH}/${WEBPACK_FILE}`;
