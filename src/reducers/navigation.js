// @flow
import { combineReducers } from "redux";
import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from "../actions/navigation";

export type State = {
  open: boolean
};

function open(state = false, action) {
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

export default combineReducers({ open });
