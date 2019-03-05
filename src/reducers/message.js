// @flow
import { combineReducers } from "redux";

import { isUnauthorized } from "../api/error";
import { OPEN_MESSAGE, CLOSE_MESSAGE } from "../actions/message";
import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE } from "../actions/token";
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../actions/user";
import {
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE
} from "../actions/artist";
import type { Action } from "../actions";

export type State = {
  open: boolean,
  message: ?string
};

export const initialState: State = {
  open: false,
  message: null
};

function open(state = initialState.open, action) {
  switch (action.type) {
    case CREATE_USER_FAILURE:
    case FETCH_TOKEN_FAILURE:
    case FETCH_ARTISTS_FAILURE:
    case OPEN_MESSAGE:
    case CREATE_USER_SUCCESS:
      return true;
    case FETCH_TOKEN_SUCCESS:
    case FETCH_ARTISTS_SUCCESS:
    case CLOSE_MESSAGE:
      return false;
    default:
      return state;
  }
}

function formatErrorMessage(error) {
  return isUnauthorized(error)
    ? "Invalid username or password"
    : "An unknown error occurred";
}

function message(state = initialState.message, action) {
  switch (action.type) {
    case CREATE_USER_FAILURE:
    case FETCH_TOKEN_FAILURE:
    case FETCH_ARTISTS_FAILURE:
      return formatErrorMessage(action.error);
    case OPEN_MESSAGE:
      return action.message;
    case CREATE_USER_SUCCESS:
      return "Account created";
    case FETCH_TOKEN_SUCCESS:
    case FETCH_ARTISTS_SUCCESS:
    case CLOSE_MESSAGE:
      return null;
    default:
      return state;
  }
}

export const isMessageOpen = (state: State) => state.open;

export const getMessage = (state: State) => state.message;

export default combineReducers<Object, Action>({ open, message });
