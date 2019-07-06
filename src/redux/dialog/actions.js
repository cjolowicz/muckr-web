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

export type DialogAction =
  | OpenCreateDialogAction
  | OpenUpdateDialogAction
  | UpdateDialogAction
  | CloseDialogAction;

export const openCreateDialog = (): OpenCreateDialogAction => ({
  type: constants.OPEN_CREATE_DIALOG,
  payload: {}
});

export const openUpdateDialog = (artist: Artist): OpenUpdateDialogAction => ({
  type: constants.OPEN_UPDATE_DIALOG,
  payload: { artist }
});

export const updateDialog = (artist: Artist): UpdateDialogAction => ({
  type: constants.UPDATE_DIALOG,
  payload: { artist }
});

export const closeDialog = (): CloseDialogAction => ({
  type: constants.CLOSE_DIALOG,
  payload: {}
});
