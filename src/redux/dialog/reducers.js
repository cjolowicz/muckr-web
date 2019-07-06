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
import * as types from "./types";
import type { Action } from "../types";

export const NO_ARTIST = {
  id: -1,
  name: ""
};

export const initialState: types.State = {
  open: null,
  artist: NO_ARTIST
};

function open(state = initialState.open, action) {
  switch (action.type) {
    case OPEN_CREATE_DIALOG:
      return DIALOG_TYPE_CREATE;
    case OPEN_UPDATE_DIALOG:
      return DIALOG_TYPE_UPDATE;
    case CLOSE_DIALOG:
      return initialState.open;
    default:
      return state;
  }
}

function artist(state = initialState.artist, action) {
  switch (action.type) {
    case OPEN_CREATE_DIALOG:
    case CLOSE_DIALOG:
      return initialState.artist;
    case OPEN_UPDATE_DIALOG:
    case UPDATE_DIALOG:
      return action.payload.artist;
    default:
      return state;
  }
}

export default combineReducers<Object, Action>({ open, artist });
