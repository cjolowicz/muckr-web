// @flow
import axios from "axios";

import { API_URL } from "../constants";
import { createTokenAuthHeader } from "./token";

export type User = {
  id: number,
  username: string
};

export async function createUser(username: string, password: string) {
  const email = `${username}@localhost`;
  const response = await axios.post(`${API_URL}/users`, {
    username,
    email,
    password
  });

  return response.data;
}

export async function getUsers(token: string) {
  const response = await axios.get(`${API_URL}/users`, {
    headers: createTokenAuthHeader(token)
  });

  return response.data;
}
