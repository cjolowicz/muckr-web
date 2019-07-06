// @flow
import { combineReducers } from "redux";

import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from "./constants";
import type { State } from "./types";
import type { Action } from "../actions";

export const initialState: State = {
  open: false
};

function open(state = initialState.open, action: Action) {
  switch (action.type) {
    case OPEN_NAVIGATION:
      return true;
    case CLOSE_NAVIGATION:
      return false;
    default:
      return state;
  }
}

export const isNavigationOpen = (state: State) => state.open;

export default combineReducers<Object, Action>({ open });
