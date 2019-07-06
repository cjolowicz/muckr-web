// @flow
import { combineReducers } from "redux";

import {
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE,
  CREATE_ARTIST_REQUEST,
  CREATE_ARTIST_SUCCESS,
  CREATE_ARTIST_FAILURE,
  REMOVE_ARTIST_REQUEST,
  REMOVE_ARTIST_SUCCESS,
  REMOVE_ARTIST_FAILURE,
  UPDATE_ARTIST_REQUEST,
  UPDATE_ARTIST_SUCCESS,
  UPDATE_ARTIST_FAILURE
} from "./constants";
import type { Action } from "../actions";
import type { State } from "./types";

export const initialState: State = {
  isFetching: false,
  ids: [],
  error: null
};

function isFetching(state = initialState.isFetching, action: Action) {
  switch (action.type) {
    case FETCH_ARTISTS_REQUEST:
    case CREATE_ARTIST_REQUEST:
    case REMOVE_ARTIST_REQUEST:
    case UPDATE_ARTIST_REQUEST:
      return true;
    case FETCH_ARTISTS_SUCCESS:
    case CREATE_ARTIST_SUCCESS:
    case REMOVE_ARTIST_SUCCESS:
    case UPDATE_ARTIST_SUCCESS:
      return false;
    case FETCH_ARTISTS_FAILURE:
    case CREATE_ARTIST_FAILURE:
    case REMOVE_ARTIST_FAILURE:
    case UPDATE_ARTIST_FAILURE:
      return false;
    default:
      return state;
  }
}

function ids(state = initialState.ids, action: Action) {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return action.payload.artists.map(({ id }) => id);
    case CREATE_ARTIST_SUCCESS:
      return [...state, action.payload.artist.id];
    case REMOVE_ARTIST_SUCCESS:
      return state.filter(id => id !== action.payload.id);
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
    case REMOVE_ARTIST_REQUEST:
    case REMOVE_ARTIST_SUCCESS:
    case UPDATE_ARTIST_REQUEST:
    case UPDATE_ARTIST_SUCCESS:
      return null;
    case FETCH_ARTISTS_FAILURE:
    case CREATE_ARTIST_FAILURE:
    case REMOVE_ARTIST_FAILURE:
    case UPDATE_ARTIST_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
}

export const isFetchingArtists = (state: State) => state.isFetching;

export const getArtistsError = (state: State) => state.error;

export default combineReducers<Object, Action>({
  isFetching,
  ids,
  error
});
