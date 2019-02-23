// @flow
import * as api from "../api/artist";
import type { $FetchError } from "../api/error";

export const FETCH_ARTISTS_REQUEST = "FETCH_ARTISTS_REQUEST";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";

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
  error: $FetchError
};

export type FetchArtistsAction =
  | FetchArtistsRequestAction
  | FetchArtistsSuccessAction
  | FetchArtistsFailureAction;

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
  error: $FetchError
): FetchArtistsFailureAction => ({
  type: FETCH_ARTISTS_FAILURE,
  error
});

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (FetchArtistsAction | ThunkAction) => any;

export const fetchArtists = (token: string) => (dispatch: Dispatch) => {
  dispatch(fetchArtistsRequest(token));

  return api
    .fetchArtists(token)
    .then(
      artists => dispatch(fetchArtistsSuccess(artists)),
      error => dispatch(fetchArtistsFailure(error))
    );
};
