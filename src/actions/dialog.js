// @flow
import type { Artist } from "../api/artist";

export const OPEN_DIALOG = "OPEN_DIALOG";
export const UPDATE_DIALOG = "UPDATE_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";

export type OpenDialogAction = {
  type: typeof OPEN_DIALOG,
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
  | OpenDialogAction
  | UpdateDialogAction
  | CloseDialogAction;

export const openDialog = (artist: Artist): OpenDialogAction => ({
  type: OPEN_DIALOG,
  artist
});

export const updateDialog = (name: string): UpdateDialogAction => ({
  type: UPDATE_DIALOG,
  name
});

export const closeDialog = (): CloseDialogAction => ({
  type: CLOSE_DIALOG
});
