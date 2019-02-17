// @flow
import { combineReducers } from "redux";
import { OPEN_MESSAGE, CLOSE_MESSAGE } from "../actions/message";
import {
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE
} from "../actions/fetchToken";
import {
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE
} from "../actions/fetchArtists";

export type State = {
  open: boolean,
  message: ?string
};

function open(state = false, action) {
  switch (action.type) {
    case FETCH_TOKEN_FAILURE:
    case FETCH_ARTISTS_FAILURE:
    case OPEN_MESSAGE:
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
  return error.response && error.response.status === 401
    ? "Invalid username or password"
    : "An unknown error occurred";
}

function message(state = null, action) {
  switch (action.type) {
    case FETCH_TOKEN_FAILURE:
    case FETCH_ARTISTS_FAILURE:
      return formatErrorMessage(action.error);
    case OPEN_MESSAGE:
      return action.message;
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

export default combineReducers({ open, message });
