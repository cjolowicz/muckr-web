// @flow
import { just } from "./utils";

export const API_URL =
  typeof window === "undefined" ? just(process.env.API_URL) : window.API_URL;
export const APP_ROOT = "root";
export const JSS_STYLE_ID = "jss-server-side";
