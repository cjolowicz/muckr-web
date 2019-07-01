// @flow
import { combineReducers } from "redux";

import {
  OPEN_CREATE_DIALOG,
  OPEN_UPDATE_DIALOG,
  UPDATE_DIALOG,
  CLOSE_DIALOG
} from "../actions/dialog";
import type { Action } from "../actions";
import type { Artist } from "../api/artist";

export const DIALOG_TYPE_CREATE = "DIALOG_TYPE_CREATE";
export const DIALOG_TYPE_UPDATE = "DIALOG_TYPE_UPDATE";

export type DialogType = typeof DIALOG_TYPE_CREATE | typeof DIALOG_TYPE_UPDATE;

export type State = {
  open: ?DialogType,
  artist: ?Artist
};

export const initialState: State = {
  open: null,
  artist: null
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
      return action.artist;
    case UPDATE_DIALOG:
      return state == null ? null : { ...state, name: action.name };
    default:
      return state;
  }
}

export const isCreateDialogOpen = (state: State) =>
  state.open === DIALOG_TYPE_CREATE;

export const isUpdateDialogOpen = (state: State) =>
  state.open === DIALOG_TYPE_UPDATE;

export const getDialogType = (state: State) => state.open;

export const getDialogArtist = (state: State) => state.artist;

export default combineReducers<Object, Action>({ open, artist });
