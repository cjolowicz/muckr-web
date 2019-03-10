// @flow
import * as api from "../api/artist";
import type { FetchError } from "../api/error";

export const FETCH_ARTISTS_REQUEST = "FETCH_ARTISTS_REQUEST";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";
export const CREATE_ARTIST_REQUEST = "CREATE_ARTIST_REQUEST";
export const CREATE_ARTIST_SUCCESS = "CREATE_ARTIST_SUCCESS";
export const CREATE_ARTIST_FAILURE = "CREATE_ARTIST_FAILURE";

export type FetchArtistsRequestAction = {
  type: typeof FETCH_ARTISTS_REQUEST,
  token: string
};

export type FetchArtistsSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS,
  artists: Array<api.Artist>
};

export type FetchArtistsFailureAction = {
  type: typeof FETCH_ARTISTS_FAILURE,
  error: FetchError
};

export type CreateArtistRequestAction = {
  type: typeof CREATE_ARTIST_REQUEST,
  token: string,
  name: string
};

export type CreateArtistSuccessAction = {
  type: typeof CREATE_ARTIST_SUCCESS,
  artist: api.Artist
};

export type CreateArtistFailureAction = {
  type: typeof CREATE_ARTIST_FAILURE,
  error: FetchError
};

export type ArtistAction =
  | FetchArtistsRequestAction
  | FetchArtistsSuccessAction
  | FetchArtistsFailureAction
  | CreateArtistRequestAction
  | CreateArtistSuccessAction
  | CreateArtistFailureAction;

export const fetchArtistsRequest = (
  token: string
): FetchArtistsRequestAction => ({
  type: FETCH_ARTISTS_REQUEST,
  token
});

export const fetchArtistsSuccess = (
  artists: Array<api.Artist>
): FetchArtistsSuccessAction => ({
  type: FETCH_ARTISTS_SUCCESS,
  artists
});

export const fetchArtistsFailure = (
  error: FetchError
): FetchArtistsFailureAction => ({
  type: FETCH_ARTISTS_FAILURE,
  error
});

export const createArtistRequest = (
  token: string,
  name: string
): CreateArtistRequestAction => ({
  type: CREATE_ARTIST_REQUEST,
  token,
  name
});

export const createArtistSuccess = (
  artist: api.Artist
): CreateArtistSuccessAction => ({
  type: CREATE_ARTIST_SUCCESS,
  artist
});

export const createArtistFailure = (
  error: FetchError
): CreateArtistFailureAction => ({
  type: CREATE_ARTIST_FAILURE,
  error
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
