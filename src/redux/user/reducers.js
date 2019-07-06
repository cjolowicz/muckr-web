// @flow
import { combineReducers } from "redux";

import {
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE
} from "./constants";
import type { Action } from "../actions";
import type { FetchError } from "../../api/error";

export type State = {
  isCreating: boolean,
  user: ?string,
  error: ?FetchError
};

export const initialState: State = {
  isCreating: false,
  user: null,
  error: null
};

function isCreating(state = initialState.isCreating, action: Action) {
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
}

function user(state = initialState.user, action: Action) {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.payload.user;
    case CREATE_USER_FAILURE:
      return null;
    default:
      return state;
  }
}

function error(state = initialState.error, action: Action) {
  switch (action.type) {
    case CREATE_USER_REQUEST:
    case CREATE_USER_SUCCESS:
      return null;
    case CREATE_USER_FAILURE:
      return action.payload.error;
    default:
      return state;
  }
}

export const isCreatingUser = (state: State) => state.isCreating;

export const getUser = (state: State) => state.user;

export const getUserError = (state: State) => state.error;

export default combineReducers<Object, Action>({ isCreating, user, error });
