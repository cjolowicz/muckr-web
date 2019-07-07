// @flow
import * as constants from "./constants";
import type { State } from "./types";

export const createDialogOpen = (state: State) =>
  state.open === constants.DIALOG_TYPE_CREATE;

export const updateDialogOpen = (state: State) =>
  state.open === constants.DIALOG_TYPE_UPDATE;

export const dialogType = (state: State) => state.open;

export const dialogArtist = (state: State) => state.artist;
