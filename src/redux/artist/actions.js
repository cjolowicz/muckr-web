// @flow
import * as api from "../../api/artist";
import * as constants from "./constants";
import * as types from "./types";
import type { FetchError } from "../../api/error";

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

export const fetchArtists = (token: string) => (dispatch: types.Dispatch) => {
  dispatch(fetchArtistsRequest(token));

  return api
    .fetchArtists(token)
    .then(
      artists => dispatch(fetchArtistsSuccess(artists)),
      error => dispatch(fetchArtistsFailure(error))
    );
};

export const createArtist = (token: string, name: string) => (
  dispatch: types.Dispatch
) => {
  dispatch(createArtistRequest(token, name));

  return api
    .createArtist(token, name)
    .then(
      artist => dispatch(createArtistSuccess(artist)),
      error => dispatch(createArtistFailure(error))
    );
};

export const removeArtist = (token: string, id: number) => (
  dispatch: types.Dispatch
) => {
  dispatch(removeArtistRequest(token, id));

  return api
    .removeArtist(token, id)
    .then(
      () => dispatch(removeArtistSuccess(id)),
      error => dispatch(removeArtistFailure(error))
    );
};

export const updateArtist = (token: string, artist: api.Artist) => (
  dispatch: types.Dispatch
) => {
  dispatch(updateArtistRequest(token, artist));

  return api
    .updateArtist(token, artist)
    .then(
      () => dispatch(updateArtistSuccess(artist)),
      error => dispatch(updateArtistFailure(error))
    );
};
