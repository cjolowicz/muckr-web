// @flow
import * as constants from "./constants";
import * as types from "./types";
import * as api from "../../api/types";

export const openCreateDialog = (): types.OpenCreateDialogAction => ({
  type: constants.OPEN_CREATE_DIALOG,
  payload: {}
});

export const openUpdateDialog = (
  artist: api.Artist
): types.OpenUpdateDialogAction => ({
  type: constants.OPEN_UPDATE_DIALOG,
  payload: { artist }
});

export const updateDialog = (artist: api.Artist): types.UpdateDialogAction => ({
  type: constants.UPDATE_DIALOG,
  payload: { artist }
});

export const closeDialog = (): types.CloseDialogAction => ({
  type: constants.CLOSE_DIALOG,
  payload: {}
});
