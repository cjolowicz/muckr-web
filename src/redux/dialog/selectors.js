// @flow
import * as constants from "./constants";
import type { State } from "./types";

export const isCreateDialogOpen = (state: State) =>
  state.open === constants.DIALOG_TYPE_CREATE;

export const isUpdateDialogOpen = (state: State) =>
  state.open === constants.DIALOG_TYPE_UPDATE;

export const getDialogType = (state: State) => state.open;

export const getDialogArtist = (state: State) => state.artist;
