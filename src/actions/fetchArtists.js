// @flow
import * as artist from "../api/artist";

export const FETCH_ARTISTS_REQUEST = "FETCH_ARTISTS_REQUEST";
export const FETCH_ARTISTS_SUCCESS = "FETCH_ARTISTS_SUCCESS";
export const FETCH_ARTISTS_FAILURE = "FETCH_ARTISTS_FAILURE";

export type FetchArtistsRequestAction = {
  type: typeof FETCH_ARTISTS_REQUEST,
  token: string
};

export type FetchArtistsSuccessAction = {
  type: typeof FETCH_ARTISTS_SUCCESS,
  artists: Array<artist.Artist>
};

export type FetchArtistsFailureAction = {
  type: typeof FETCH_ARTISTS_FAILURE,
  error: Error
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
  artists: Array<artist.Artist>
): FetchArtistsSuccessAction => ({
  type: FETCH_ARTISTS_SUCCESS,
  artists
});

export const fetchArtistsFailure = (
  error: Error
): FetchArtistsFailureAction => ({
  type: FETCH_ARTISTS_FAILURE,
  error
});

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (FetchArtistsAction | ThunkAction) => any;

export const fetchArtists = (token: string) => (dispatch: Dispatch) => {
  dispatch(fetchArtistsRequest(token));

  return artist
    .fetchArtists(token)
    .then(
      artists => dispatch(fetchArtistsSuccess(artists)),
      error => dispatch(fetchArtistsFailure(error))
    );
};
