// @flow
import * as constants from "./constants";
import type { Artist } from "../../api/artist";

export type OpenCreateDialogAction = {
  type: typeof constants.OPEN_CREATE_DIALOG,
  payload: {}
};

export type OpenUpdateDialogAction = {
  type: typeof constants.OPEN_UPDATE_DIALOG,
  payload: {
    artist: Artist
  }
};

export type UpdateDialogAction = {
  type: typeof constants.UPDATE_DIALOG,
  payload: {
    artist: Artist
  }
};

export type CloseDialogAction = {
  type: typeof constants.CLOSE_DIALOG,
  payload: {}
};

export type Action =
  | OpenCreateDialogAction
  | OpenUpdateDialogAction
  | UpdateDialogAction
  | CloseDialogAction;

export type DialogType =
  | typeof constants.DIALOG_TYPE_CREATE
  | typeof constants.DIALOG_TYPE_UPDATE;

export type State = {
  open: ?DialogType,
  artist: Artist
};
