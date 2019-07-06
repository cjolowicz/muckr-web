// @flow
import * as api from "../../api/artist";
import type { FetchError } from "../../api/error";

export const FETCH_ARTISTS_REQUEST = "FETCH_ARTISTS_REQUEST";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";
export const CREATE_ARTIST_REQUEST = "CREATE_ARTIST_REQUEST";
export const CREATE_ARTIST_SUCCESS = "CREATE_ARTIST_SUCCESS";
export const CREATE_ARTIST_FAILURE = "CREATE_ARTIST_FAILURE";
export const REMOVE_ARTIST_REQUEST = "REMOVE_ARTIST_REQUEST";
export const REMOVE_ARTIST_SUCCESS = "REMOVE_ARTIST_SUCCESS";
export const REMOVE_ARTIST_FAILURE = "REMOVE_ARTIST_FAILURE";
export const UPDATE_ARTIST_REQUEST = "UPDATE_ARTIST_REQUEST";
export const UPDATE_ARTIST_SUCCESS = "UPDATE_ARTIST_SUCCESS";
export const UPDATE_ARTIST_FAILURE = "UPDATE_ARTIST_FAILURE";

export type FetchArtistsRequestAction = {
  type: typeof FETCH_ARTISTS_REQUEST,
  payload: {
    token: string
  }
};

export type FetchArtistsSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS,
  payload: {
    artists: Array<api.Artist>
  }
};

export type FetchArtistsFailureAction = {
  type: typeof FETCH_ARTISTS_FAILURE,
  payload: {
    error: FetchError
  }
};

export type CreateArtistRequestAction = {
  type: typeof CREATE_ARTIST_REQUEST,
  payload: {
    token: string,
    name: string
  }
};

export type CreateArtistSuccessAction = {
  type: typeof CREATE_ARTIST_SUCCESS,
  payload: {
    artist: api.Artist
  }
};

export type CreateArtistFailureAction = {
  type: typeof CREATE_ARTIST_FAILURE,
  payload: {
    error: FetchError
  }
};

export type RemoveArtistRequestAction = {
  type: typeof REMOVE_ARTIST_REQUEST,
  payload: {
    token: string,
    id: number
  }
};

export type RemoveArtistSuccessAction = {
  type: typeof REMOVE_ARTIST_SUCCESS,
  payload: {
    id: number
  }
};

export type RemoveArtistFailureAction = {
  type: typeof REMOVE_ARTIST_FAILURE,
  payload: {
    error: FetchError
  }
};

export type UpdateArtistRequestAction = {
  type: typeof UPDATE_ARTIST_REQUEST,
  payload: {
    token: string,
    artist: api.Artist
  }
};

export type UpdateArtistSuccessAction = {
  type: typeof UPDATE_ARTIST_SUCCESS,
  payload: {
    artist: api.Artist
  }
};

export type UpdateArtistFailureAction = {
  type: typeof UPDATE_ARTIST_FAILURE,
  payload: {
    error: FetchError
  }
};

export type ArtistAction =
  | FetchArtistsRequestAction
  | FetchArtistsSuccessAction
  | FetchArtistsFailureAction
  | CreateArtistRequestAction
  | CreateArtistSuccessAction
  | CreateArtistFailureAction
  | RemoveArtistRequestAction
  | RemoveArtistSuccessAction
  | RemoveArtistFailureAction
  | UpdateArtistRequestAction
  | UpdateArtistSuccessAction
  | UpdateArtistFailureAction;

export const fetchArtistsRequest = (
  token: string
): FetchArtistsRequestAction => ({
  type: FETCH_ARTISTS_REQUEST,
  payload: { token }
});

export const fetchArtistsSuccess = (
  artists: Array<api.Artist>
): FetchArtistsSuccessAction => ({
  type: FETCH_ARTISTS_SUCCESS,
  payload: { artists }
});

export const fetchArtistsFailure = (
  error: FetchError
): FetchArtistsFailureAction => ({
  type: FETCH_ARTISTS_FAILURE,
  payload: { error }
});

export const createArtistRequest = (
  token: string,
  name: string
): CreateArtistRequestAction => ({
  type: CREATE_ARTIST_REQUEST,
  payload: { token, name }
});

export const createArtistSuccess = (
  artist: api.Artist
): CreateArtistSuccessAction => ({
  type: CREATE_ARTIST_SUCCESS,
  payload: { artist }
});

export const createArtistFailure = (
  error: FetchError
): CreateArtistFailureAction => ({
  type: CREATE_ARTIST_FAILURE,
  payload: { error }
});

export const removeArtistRequest = (
  token: string,
  id: number
): RemoveArtistRequestAction => ({
  type: REMOVE_ARTIST_REQUEST,
  payload: { token, id }
});

export const removeArtistSuccess = (id: number): RemoveArtistSuccessAction => ({
  type: REMOVE_ARTIST_SUCCESS,
  payload: { id }
});

export const removeArtistFailure = (
  error: FetchError
): RemoveArtistFailureAction => ({
  type: REMOVE_ARTIST_FAILURE,
  payload: { error }
});

export const updateArtistRequest = (
  token: string,
  artist: api.Artist
): UpdateArtistRequestAction => ({
  type: UPDATE_ARTIST_REQUEST,
  payload: { token, artist }
});

export const updateArtistSuccess = (
  artist: api.Artist
): UpdateArtistSuccessAction => ({
  type: UPDATE_ARTIST_SUCCESS,
  payload: { artist }
});

export const updateArtistFailure = (
  error: FetchError
): UpdateArtistFailureAction => ({
  type: UPDATE_ARTIST_FAILURE,
  payload: { error }
});

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (ArtistAction | ThunkAction) => any;

export const fetchArtists = (token: string) => (dispatch: Dispatch) => {
  dispatch(fetchArtistsRequest(token));

  return api
    .fetchArtists(token)
    .then(
      artists => dispatch(fetchArtistsSuccess(artists)),
      error => dispatch(fetchArtistsFailure(error))
    );
};

export const createArtist = (token: string, name: string) => (
  dispatch: Dispatch
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
  dispatch: Dispatch
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
  dispatch: Dispatch
) => {
  dispatch(updateArtistRequest(token, artist));

  return api
    .updateArtist(token, artist)
    .then(
      () => dispatch(updateArtistSuccess(artist)),
      error => dispatch(updateArtistFailure(error))
    );
};
