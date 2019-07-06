// @flow
import { combineReducers } from "redux";

import type { State } from "./types";
import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
  CLEAR_TOKEN
} from "./constants";
import { FETCH_ARTISTS_FAILURE } from "../artist/constants";
import type { Action } from "../actions";
import { isUnauthorized } from "../../api/error";

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
      return action.payload.token;
    case FETCH_TOKEN_FAILURE:
    case CLEAR_TOKEN:
      return null;
    case FETCH_ARTISTS_FAILURE:
      return isUnauthorized(action.payload.error) ? null : state;
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
      return action.payload.error;
    default:
      return state;
  }
}

export default combineReducers<Object, Action>({ isFetching, token, error });
