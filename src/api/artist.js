// @flow
import axios from "axios";
import { API_URL } from "../constants";
import { createTokenAuthHeader } from "./user";

export type Artist = {
  id: number,
  name: string
};

// eslint-disable-next-line import/prefer-default-export
export async function fetchArtists(token: string) {
  const response = await axios.get(`${API_URL}/artists`, {
    headers: createTokenAuthHeader(token)
  });

  return response.data;
}