// @flow
import * as api from "../api/types";
import { unsafeCast } from "../utils";

// an arbitrary 32-byte sequence in hexadecimal
export const TOKEN =
  "a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2";

export const USER = {
  id: 1,
  username: "jane"
};

export const ARTIST = {
  id: 1,
  name: "Jane Doe"
};

export const OTHER_ARTIST = {
  id: 2,
  name: "John Doe"
};

export const ARTISTS = [ARTIST, OTHER_ARTIST];

export const GENERIC_ERROR = unsafeCast<api.Error>(new Error("failure"));

export const UNAUTHORIZED_ERROR = unsafeCast<api.Error>({
  response: { status: 401 }
});
