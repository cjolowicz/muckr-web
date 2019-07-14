// @flow
import type { Action } from "../types";
import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE
} from "../token/constants";
import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "../user/constants";
import {
  CREATE_ARTIST_REQUEST,
  CREATE_ARTIST_SUCCESS,
  CREATE_ARTIST_FAILURE,
  REMOVE_ARTIST_REQUEST,
  REMOVE_ARTIST_SUCCESS,
  REMOVE_ARTIST_FAILURE,
  UPDATE_ARTIST_REQUEST,
  UPDATE_ARTIST_SUCCESS,
  UPDATE_ARTIST_FAILURE,
  FETCH_ARTISTS_REQUEST,
  FETCH_ARTISTS_SUCCESS,
  FETCH_ARTISTS_FAILURE
} from "../artist/constants";

const spinner = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case CREATE_ARTIST_REQUEST:
    case CREATE_USER_REQUEST:
    case FETCH_ARTISTS_REQUEST:
    case FETCH_TOKEN_REQUEST:
    case REMOVE_ARTIST_REQUEST:
    case UPDATE_ARTIST_REQUEST:
      return true;
    case CREATE_ARTIST_SUCCESS:
    case CREATE_ARTIST_FAILURE:
    case CREATE_USER_SUCCESS:
    case CREATE_USER_FAILURE:
    case FETCH_ARTISTS_SUCCESS:
    case FETCH_ARTISTS_FAILURE:
    case FETCH_TOKEN_SUCCESS:
    case FETCH_TOKEN_FAILURE:
    case REMOVE_ARTIST_SUCCESS:
    case REMOVE_ARTIST_FAILURE:
    case UPDATE_ARTIST_SUCCESS:
    case UPDATE_ARTIST_FAILURE:
      return false;
    default:
      return state;
  }
};

export default spinner;
