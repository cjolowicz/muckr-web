// @flow
import type { FetchError } from "../api/error";
import { unsafeCast } from "../utils";

// an arbitrary 32-byte sequence in hexadecimal
export const TOKEN =
  "a7e743fb7ca1c7c883312b6abb0c99131e4ff210e0730d2f1ee4fad87e514ea2";

export const USER = {
  id: 1,
  username: "jane"
};

export const ARTISTS = [
  {
    id: 1,
    name: "Jane Doe"
  },
  {
    id: 2,
    name: "John Doe"
  }
];

export const GENERIC_ERROR = unsafeCast<FetchError>(new Error("failure"));

export const UNAUTHORIZED_ERROR = unsafeCast<FetchError>({
  response: { status: 401 }
});
