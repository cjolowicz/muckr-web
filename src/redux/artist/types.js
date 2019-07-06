// @flow
import * as api from "../../api/artist";
import * as constants from "./constants";
import type { FetchError } from "../../api/error";

export type FetchArtistsRequestAction = {
  type: typeof constants.FETCH_ARTISTS_REQUEST,
  payload: {
    token: string
  }
};

export type FetchArtistsSuccessAction = {
  type: typeof constants.FETCH_ARTISTS_SUCCESS,
  payload: {
    artists: Array<api.Artist>
  }
};

export type FetchArtistsFailureAction = {
  type: typeof constants.FETCH_ARTISTS_FAILURE,
  payload: {
    error: FetchError
  }
};

export type CreateArtistRequestAction = {
  type: typeof constants.CREATE_ARTIST_REQUEST,
  payload: {
    token: string,
    name: string
  }
};

export type CreateArtistSuccessAction = {
  type: typeof constants.CREATE_ARTIST_SUCCESS,
  payload: {
    artist: api.Artist
  }
};

export type CreateArtistFailureAction = {
  type: typeof constants.CREATE_ARTIST_FAILURE,
  payload: {
    error: FetchError
  }
};

export type RemoveArtistRequestAction = {
  type: typeof constants.REMOVE_ARTIST_REQUEST,
  payload: {
    token: string,
    id: number
  }
};

export type RemoveArtistSuccessAction = {
  type: typeof constants.REMOVE_ARTIST_SUCCESS,
  payload: {
    id: number
  }
};

export type RemoveArtistFailureAction = {
  type: typeof constants.REMOVE_ARTIST_FAILURE,
  payload: {
    error: FetchError
  }
};

export type UpdateArtistRequestAction = {
  type: typeof constants.UPDATE_ARTIST_REQUEST,
  payload: {
    token: string,
    artist: api.Artist
  }
};

export type UpdateArtistSuccessAction = {
  type: typeof constants.UPDATE_ARTIST_SUCCESS,
  payload: {
    artist: api.Artist
  }
};

export type UpdateArtistFailureAction = {
  type: typeof constants.UPDATE_ARTIST_FAILURE,
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

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (ArtistAction | ThunkAction) => any;
