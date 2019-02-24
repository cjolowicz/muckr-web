// @flow
import { combineReducers } from "redux";

import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
  CLEAR_TOKEN
} from "../actions/token";
import { FETCH_ARTISTS_FAILURE } from "../actions/artist";
import type { Action } from "../actions";
import { isUnauthorized } from "../api/error";
import type { FetchError } from "../api/error";

export type State = {
  isFetching: boolean,
  token: ?string,
  error: ?FetchError
};

export const initialState: State = {
  isFetching: false,
  token: null,
  error: null
};

function isFetching(state = initialState.isFetching, action: Action) {
  switch (action.type) {
    case FETCH_TOKEN_REQUEST:
      return true;
    case FETCH_TOKEN_SUCCESS:
      return false;
    case FETCH_TOKEN_FAILURE:
      return false;
    default:
      return state;
  }
}

function token(state = initialState.token, action: Action) {
  switch (action.type) {
    case FETCH_TOKEN_SUCCESS:
      return action.token;
    case FETCH_TOKEN_FAILURE:
    case CLEAR_TOKEN:
      return null;
    case FETCH_ARTISTS_FAILURE:
      return isUnauthorized(action.error) ? null : state;
    default:
      return state;
  }
}

function error(state = initialState.error, action: Action) {
  switch (action.type) {
    case FETCH_TOKEN_REQUEST:
    case FETCH_TOKEN_SUCCESS:
      return null;
    case FETCH_TOKEN_FAILURE:
      return action.error;
    default:
      return state;
  }
}

export const isFetchingToken = (state: State) => state.isFetching;

export const getToken = (state: State) => state.token;

export const getTokenError = (state: State) => state.error;

export default combineReducers<Object, Action>({ isFetching, token, error });
