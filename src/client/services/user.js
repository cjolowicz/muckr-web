// @flow
import axios from "axios";
import { API_URL } from "../../constants";

export function createTokenAuthHeader(token: string) {
  return { Authorization: `Bearer ${token}` };
}

export function fetchToken(username: string, password: string) {
  return axios
    .post(
      `${API_URL}/tokens`,
      {},
      {
        auth: { username, password }
      }
    )
    .then(response => response.data.token);
}

export function login(username: string, password: string) {
  return fetchToken(username, password).then(token => {
    localStorage.setItem("token", token);
  });
}
