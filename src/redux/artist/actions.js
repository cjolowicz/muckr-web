// @flow
import * as api from "../../api/artist";
import * as constants from "./constants";
import * as types from "./types";
import type { FetchError } from "../../api/types";

export const fetchArtistsRequest = (
  token: string
): types.FetchArtistsRequestAction => ({
  type: constants.FETCH_ARTISTS_REQUEST,
  payload: { token }
});

export const fetchArtistsSuccess = (
  artists: Array<api.Artist>
): types.FetchArtistsSuccessAction => ({
  type: constants.FETCH_ARTISTS_SUCCESS,
  payload: { artists }
});

export const fetchArtistsFailure = (
  error: FetchError
): types.FetchArtistsFailureAction => ({
  type: constants.FETCH_ARTISTS_FAILURE,
  payload: { error }
});

export const createArtistRequest = (
  token: string,
  name: string
): types.CreateArtistRequestAction => ({
  type: constants.CREATE_ARTIST_REQUEST,
  payload: { token, name }
});

export const createArtistSuccess = (
  artist: api.Artist
): types.CreateArtistSuccessAction => ({
  type: constants.CREATE_ARTIST_SUCCESS,
  payload: { artist }
});

export const createArtistFailure = (
  error: FetchError
): types.CreateArtistFailureAction => ({
  type: constants.CREATE_ARTIST_FAILURE,
  payload: { error }
});

export const removeArtistRequest = (
  token: string,
  id: number
): types.RemoveArtistRequestAction => ({
  type: constants.REMOVE_ARTIST_REQUEST,
  payload: { token, id }
});

export const removeArtistSuccess = (
  id: number
): types.RemoveArtistSuccessAction => ({
  type: constants.REMOVE_ARTIST_SUCCESS,
  payload: { id }
});

export const removeArtistFailure = (
  error: FetchError
): types.RemoveArtistFailureAction => ({
  type: constants.REMOVE_ARTIST_FAILURE,
  payload: { error }
});

export const updateArtistRequest = (
  token: string,
  artist: api.Artist
): types.UpdateArtistRequestAction => ({
  type: constants.UPDATE_ARTIST_REQUEST,
  payload: { token, artist }
});

export const updateArtistSuccess = (
  artist: api.Artist
): types.UpdateArtistSuccessAction => ({
  type: constants.UPDATE_ARTIST_SUCCESS,
  payload: { artist }
});

export const updateArtistFailure = (
  error: FetchError
): types.UpdateArtistFailureAction => ({
  type: constants.UPDATE_ARTIST_FAILURE,
  payload: { error }
});
