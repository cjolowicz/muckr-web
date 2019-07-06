// @flow
import { combineReducers } from "redux";

import { OPEN_MESSAGE, CLOSE_MESSAGE } from "./constants";
import { FETCH_TOKEN_SUCCESS, FETCH_TOKEN_FAILURE } from "../token/constants";
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../user/constants";
import {
  CREATE_ARTIST_SUCCESS,
  CREATE_ARTIST_FAILURE,
  REMOVE_ARTIST_SUCCESS,
  REMOVE_ARTIST_FAILURE,
  UPDATE_ARTIST_SUCCESS,
  UPDATE_ARTIST_FAILURE,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE
} from "../artist/constants";
import type { Action } from "../types";

function open(state = false, action) {
  switch (action.type) {
    case CREATE_USER_FAILURE:
    case CREATE_ARTIST_FAILURE:
    case REMOVE_ARTIST_FAILURE:
    case UPDATE_ARTIST_FAILURE:
    case FETCH_TOKEN_FAILURE:
    case FETCH_ARTISTS_FAILURE:
    case OPEN_MESSAGE:
    case CREATE_USER_SUCCESS:
    case CREATE_ARTIST_SUCCESS:
    case REMOVE_ARTIST_SUCCESS:
    case UPDATE_ARTIST_SUCCESS:
      return true;
    case FETCH_TOKEN_SUCCESS:
    case FETCH_ARTISTS_SUCCESS:
    case CLOSE_MESSAGE:
      return false;
    default:
      return state;
  }
}

function formatFailedAction(actionType) {
  switch (actionType) {
    case CREATE_USER_FAILURE:
      return "Cannot create user";
    case CREATE_ARTIST_FAILURE:
      return "Cannot create artist";
    case REMOVE_ARTIST_FAILURE:
      return "Cannot remove artist";
    case UPDATE_ARTIST_FAILURE:
      return "Cannot update artist";
    case FETCH_TOKEN_FAILURE:
      return "Cannot log in";
    case FETCH_ARTISTS_FAILURE:
      return "Cannot load artists";
    default:
      return "";
  }
}

export function formatErrorMessage(actionType: string, errorMessage: string) {
  const prefix = formatFailedAction(actionType);
  return prefix ? `${prefix}: ${errorMessage}` : errorMessage;
}

function message(state = null, action) {
  switch (action.type) {
    case CREATE_USER_FAILURE:
    case CREATE_ARTIST_FAILURE:
    case REMOVE_ARTIST_FAILURE:
    case UPDATE_ARTIST_FAILURE:
    case FETCH_TOKEN_FAILURE:
    case FETCH_ARTISTS_FAILURE:
      return formatErrorMessage(action.type, action.payload.error.message);
    case OPEN_MESSAGE:
      return action.payload.message;
    case CREATE_USER_SUCCESS:
      return "Account created";
    case CREATE_ARTIST_SUCCESS:
      return "Artist created";
    case REMOVE_ARTIST_SUCCESS:
      return "Artist removed";
    case UPDATE_ARTIST_SUCCESS:
      return "Artist updated";
    case FETCH_TOKEN_SUCCESS:
    case FETCH_ARTISTS_SUCCESS:
    case CLOSE_MESSAGE:
      return null;
    default:
      return state;
  }
}

export default combineReducers<Object, Action>({ open, message });
