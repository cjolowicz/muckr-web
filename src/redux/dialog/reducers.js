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
import type { DialogType } from "./types";
import type { Action, State } from "../types";
import type { Artist } from "../../api/types";

export const NO_ARTIST = {
  id: -1,
  name: ""
};

const open = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case OPEN_CREATE_DIALOG:
    case OPEN_UPDATE_DIALOG:
      return true;
    case CLOSE_DIALOG:
      return false;
    default:
      return state;
  }
};

const type = (state: DialogType = DIALOG_TYPE_CREATE, action: Action) => {
  switch (action.type) {
    case OPEN_CREATE_DIALOG:
      return DIALOG_TYPE_CREATE;
    case OPEN_UPDATE_DIALOG:
      return DIALOG_TYPE_UPDATE;
    default:
      return state;
  }
};

const artist = (state: Artist = NO_ARTIST, action: Action) => {
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

export default combineReducers<State, Action>({ open, type, artist });
