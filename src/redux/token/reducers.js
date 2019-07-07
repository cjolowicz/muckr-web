// @flow
import { combineReducers } from "redux";

import {
  FETCH_TOKEN_SUCCESS,
  FETCH_TOKEN_FAILURE,
  CLEAR_TOKEN
} from "./constants";
import { FETCH_ARTISTS_FAILURE } from "../artist/constants";
import type { Action, State } from "../types";
import { isUnauthorized } from "../../api/error";

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

export default combineReducers<State, Action>({ token });
