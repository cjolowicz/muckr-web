// @flow
import { just, fromMaybe } from "./utils";

export const CLIENT_API_URL =
  typeof window !== "undefined" ? window.API_URL : just(process.env.API_URL);

export const API_URL =
  typeof window !== "undefined"
    ? CLIENT_API_URL
    : fromMaybe(CLIENT_API_URL, process.env.INTERNAL_API_URL);

export const APP_ROOT = "root";
export const JSS_STYLE_ID = "jss-server-side";
