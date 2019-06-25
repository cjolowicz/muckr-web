// @flow
import type { Artist } from "../api/artist";

export const OPEN_CREATE_DIALOG = "OPEN_CREATE_DIALOG";
export const OPEN_UPDATE_DIALOG = "OPEN_UPDATE_DIALOG";
export const UPDATE_DIALOG = "UPDATE_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

export type OpenCreateDialogAction = {
  type: typeof OPEN_CREATE_DIALOG
};

export type OpenUpdateDialogAction = {
  type: typeof OPEN_UPDATE_DIALOG,
  artist: Artist
};

export type UpdateDialogAction = {
  type: typeof UPDATE_DIALOG,
  name: string
};

export type CloseDialogAction = {
  type: typeof CLOSE_DIALOG
};

export type DialogAction =
  | OpenCreateDialogAction
  | OpenUpdateDialogAction
  | UpdateDialogAction
  | CloseDialogAction;

export const openCreateDialog = (): OpenCreateDialogAction => ({
  type: OPEN_CREATE_DIALOG
});

export const openUpdateDialog = (artist: Artist): OpenUpdateDialogAction => ({
  type: OPEN_UPDATE_DIALOG,
  artist
});

export const updateDialog = (name: string): UpdateDialogAction => ({
  type: UPDATE_DIALOG,
  name
});

export const closeDialog = (): CloseDialogAction => ({
  type: CLOSE_DIALOG
});
