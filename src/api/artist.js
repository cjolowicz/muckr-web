// @flow
import axios from "axios";
import { API_URL } from "../constants";
import { createTokenAuthHeader } from "./token";

export type Artist = {
  id: number,
  name: string
};

export async function fetchArtists(token: string) {
  const response = await axios.get(`${API_URL}/artists`, {
    headers: createTokenAuthHeader(token)
  });

  return response.data;
}

export async function createArtist(token: string, name: string) {
  const response = await axios.post(
    `${API_URL}/artists`,
    { name },
    {
      headers: createTokenAuthHeader(token)
    }
  );

  return response.data;
}

export async function removeArtist(token: string, id: number) {
  await axios.delete(`${API_URL}/artists/${id}`, {
    headers: createTokenAuthHeader(token)
  });
}

export async function updateArtist(token: string, { id, name }: Artist) {
  const response = await axios.put(
    `${API_URL}/artists/${id}`,
    { name },
    {
      headers: createTokenAuthHeader(token)
    }
  );

  return response.data;
}
