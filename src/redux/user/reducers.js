// @flow
import { combineReducers } from "redux";

import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./constants";
import type { Action, State } from "../types";

const pending = (state = false, action: Action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return true;
    case CREATE_USER_SUCCESS:
      return false;
    case CREATE_USER_FAILURE:
      return false;
    default:
      return state;
  }
};

const user = (state = null, action: Action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.payload.user;
    case CREATE_USER_FAILURE:
      return null;
    default:
      return state;
  }
};

const error = (state = null, action: Action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
    case CREATE_USER_SUCCESS:
      return null;
    case CREATE_USER_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
};

export default combineReducers<State, Action>({ pending, user, error });
