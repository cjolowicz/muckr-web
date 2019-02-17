// @flow
import { combineReducers } from "redux";

import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE
} from "../actions/fetchToken";

import type { $FetchError } from "../services/user";

function isFetching(state = false, action) {
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

function token(state = null, action) {
  switch (action.type) {
    case FETCH_TOKEN_SUCCESS:
      return action.token;
    case FETCH_TOKEN_FAILURE:
      return null;
    default:
      return state;
  }
}

function error(state = null, action) {
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

export type State = {
  isFetching: boolean,
  token: ?string,
  error: ?$FetchError
};

export const isFetchingToken = (state: State) => state.isFetching;

export const getToken = (state: State) => state.token;

export const getTokenError = (state: State) => state.error;

export default combineReducers({ isFetching, token, error });