// @flow
import { combineReducers } from "redux";

import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  CREATE_ARTIST_REQUEST,
  CREATE_ARTIST_SUCCESS,
  CREATE_ARTIST_FAILURE
} from "../actions/artist";
import type { Action } from "../actions";
import type { Artist } from "../api/artist";
import type { FetchError } from "../api/error";

export type State = {
  isFetching: boolean,
  artists: ?Array<Artist>,
  error: ?FetchError
};

export const initialState: State = {
  isFetching: false,
  artists: null,
  error: null
};

function isFetching(state = initialState.isFetching, action: Action) {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
    case CREATE_ARTIST_REQUEST:
      return true;
    case FETCH_ARTISTS_SUCCESS:
    case CREATE_ARTIST_SUCCESS:
      return false;
    case FETCH_ARTISTS_FAILURE:
    case CREATE_ARTIST_FAILURE:
      return false;
    default:
      return state;
  }
}

function artists(state = initialState.artists, action: Action) {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return action.artists;
    case CREATE_ARTIST_SUCCESS:
      return state == null ? [action.artist] : [...state, action.artist];
    case FETCH_ARTISTS_FAILURE:
      return null;
    default:
      return state;
  }
}

function error(state = initialState.error, action: Action) {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
    case FETCH_ARTISTS_SUCCESS:
    case CREATE_ARTIST_REQUEST:
    case CREATE_ARTIST_SUCCESS:
      return null;
    case FETCH_ARTISTS_FAILURE:
    case CREATE_ARTIST_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const isFetchingArtists = (state: State) => state.isFetching;

export const getArtists = (state: State) => state.artists;

export const getArtistsError = (state: State) => state.error;

export default combineReducers<Object, Action>({ isFetching, artists, error });
