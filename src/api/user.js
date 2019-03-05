// @flow
import axios from "axios";

import { API_URL } from "../constants";

export type User = {
  id: number,
  username: string
};

// eslint-disable-next-line import/prefer-default-export
export async function createUser(username: string, password: string) {
  const email = `${username}@localhost`;
  const response = await axios.post(`${API_URL}/users`, {
    username,
    email,
    password
  });

  return response.data;
}
