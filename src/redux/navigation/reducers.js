// @flow
import { combineReducers } from "redux";

import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from "./actions";
import type { Action } from "../actions";

export type State = {
  open: boolean
};

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
