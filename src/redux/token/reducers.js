// @flow
import { combineReducers } from "redux";

import {
  FETCH_TOKEN_REQUEST,
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
  CLEAR_TOKEN
} from "./constants";
import { FETCH_ARTISTS_FAILURE } from "../artist/constants";
import type { Action } from "../types";
import { isUnauthorized } from "../../api/error";

const isFetching = (state = false, action: Action) => {
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
};

const token = (state = null, action: Action) => {
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
};

const error = (state = null, action: Action) => {
  switch (action.type) {
    case FETCH_TOKEN_REQUEST:
    case FETCH_TOKEN_SUCCESS:
      return null;
    case FETCH_TOKEN_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
};

export default combineReducers<Object, Action>({ isFetching, token, error });
