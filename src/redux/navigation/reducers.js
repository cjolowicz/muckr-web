// @flow
import { combineReducers } from "redux";

import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from "./constants";
import type { Action } from "../types";

function open(state = false, action: Action) {
  switch (action.type) {
    case OPEN_NAVIGATION:
      return true;
    case CLOSE_NAVIGATION:
      return false;
    default:
      return state;
  }
}

export default combineReducers<Object, Action>({ open });
