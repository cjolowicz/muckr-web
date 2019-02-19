// @flow
import type { Dispatch } from "redux";

import * as artist from "../api/artist";

export const FETCH_ARTISTS_REQUEST = "FETCH_ARTISTS_REQUEST";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";

export const fetchArtistsRequest = (token: string) => ({
  type: FETCH_ARTISTS_REQUEST,
  token
});

export const fetchArtistsSuccess = (artists: Array<artist.Artist>) => ({
  type: FETCH_ARTISTS_SUCCESS,
  artists
});

export const fetchArtistsFailure = (error: Error) => ({
  type: FETCH_ARTISTS_FAILURE,
  error
});

export const fetchArtists = (token: string) => (dispatch: Dispatch) => {
  dispatch(fetchArtistsRequest(token));

  return artist
    .fetchArtists(token)
    .then(
      artists => dispatch(fetchArtistsSuccess(artists)),
      error => dispatch(fetchArtistsFailure(error))
    );
};
