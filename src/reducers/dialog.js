// @flow
import { combineReducers } from "redux";

import { OPEN_DIALOG, UPDATE_DIALOG, CLOSE_DIALOG } from "../actions/dialog";
import type { Action } from "../actions";
import type { Artist } from "../api/artist";

export type State = {
  open: boolean,
  artist: ?Artist
};

export const initialState: State = {
  open: false,
  artist: null
};

function open(state = initialState.open, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return true;
    case CLOSE_DIALOG:
      return false;
    default:
      return state;
  }
}

function artist(state = initialState.artist, action) {
  switch (action.type) {
    case OPEN_DIALOG:
      return action.artist;
    case UPDATE_DIALOG:
      return state == null ? null : { ...state, name: action.name };
    case CLOSE_DIALOG:
      return null;
    default:
      return state;
  }
}

export const isDialogOpen = (state: State) => state.open;

export const getDialogArtist = (state: State) => state.artist;

export default combineReducers<Object, Action>({ open, artist });
