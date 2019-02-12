// @flow
import axios from "axios";
import type { $AxiosError } from "axios";

import { API_URL } from "../constants";

export type $FetchError = $AxiosError<{}> | Error;

export function createTokenAuthHeader(token: string) {
  return { Authorization: `Bearer ${token}` };
}

export async function fetchToken(username: string, password: string) {
  const auth = { username, password };
  const response = await axios.post(`${API_URL}/tokens`, {}, { auth });

  return response.data.token;
}
