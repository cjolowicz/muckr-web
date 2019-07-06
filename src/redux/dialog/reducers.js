// @flow
import { combineReducers } from "redux";

import {
  OPEN_CREATE_DIALOG,
  OPEN_UPDATE_DIALOG,
  UPDATE_DIALOG,
  CLOSE_DIALOG,
  DIALOG_TYPE_CREATE,
  DIALOG_TYPE_UPDATE
} from "./constants";
import type { Action, State } from "../types";

export const NO_ARTIST = {
  id: -1,
  name: ""
};

const open = (state = null, action) => {
  switch (action.type) {
    case OPEN_CREATE_DIALOG:
      return DIALOG_TYPE_CREATE;
    case OPEN_UPDATE_DIALOG:
      return DIALOG_TYPE_UPDATE;
    case CLOSE_DIALOG:
      return null;
    default:
      return state;
  }
};

const artist = (state = NO_ARTIST, action) => {
  switch (action.type) {
    case OPEN_CREATE_DIALOG:
    case CLOSE_DIALOG:
      return NO_ARTIST;
    case OPEN_UPDATE_DIALOG:
    case UPDATE_DIALOG:
      return action.payload.artist;
    default:
      return state;
  }
};

export default combineReducers<State, Action>({ open, artist });
