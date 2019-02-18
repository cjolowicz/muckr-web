// @flow
import { combineReducers } from "redux";

import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE
} from "../actions/fetchArtists";
import type { Artist } from "../services/artist";

function isFetching(state = false, action) {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
      return true;
    case FETCH_ARTISTS_SUCCESS:
      return false;
    case FETCH_ARTISTS_FAILURE:
      return false;
    default:
      return state;
  }
}

function artists(state = null, action) {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return action.artists;
    case FETCH_ARTISTS_FAILURE:
      return null;
    default:
      return state;
  }
}

function error(state = null, action) {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
    case FETCH_ARTISTS_SUCCESS:
      return null;
    case FETCH_ARTISTS_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export type State = {
  isFetching: boolean,
  artists: ?Array<Artist>,
  error: Error
};

export const isFetchingArtists = (state: State) => state.isFetching;

export const getArtists = (state: State) => state.artists;

export const getArtistsError = (state: State) => state.error;

export default combineReducers({ isFetching, artists, error });
