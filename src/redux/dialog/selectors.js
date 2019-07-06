// @flow
import * as constants from "./constants";
import * as types from "./types";

export const isCreateDialogOpen = (state: types.State) =>
  state.open === constants.DIALOG_TYPE_CREATE;

export const isUpdateDialogOpen = (state: types.State) =>
  state.open === constants.DIALOG_TYPE_UPDATE;

export const getDialogType = (state: types.State) => state.open;

export const getDialogArtist = (state: types.State) => state.artist;
