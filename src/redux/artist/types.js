// @flow
import * as api from "../../api/types";
import * as constants from "./constants";

export type State = {
  pending: boolean,
  ids: Array<number>
};

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
    error: api.FetchError
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
    error: api.FetchError
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
    error: api.FetchError
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
    error: api.FetchError
  }
};

export type Action =
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
