// @flow
import { createSelector } from "reselect";

import * as dialog from "./dialog/selectors";
import * as message from "./message/selectors";
import * as navigation from "./navigation/selectors";
import * as token from "./token/selectors";
import * as user from "./user/selectors";
import * as artist from "./artist/selectors";
import { getItemsById } from "../utils";
import type { State } from "./types";

export const createDialogOpen = (state: State) =>
  dialog.createDialogOpen(state.dialog);

export const updateDialogOpen = (state: State) =>
  dialog.updateDialogOpen(state.dialog);

export const dialogArtist = (state: State) => dialog.dialogArtist(state.dialog);

export const dialogType = (state: State) => dialog.dialogType(state.dialog);

export const isMessageOpen = (state: State) =>
  message.isMessageOpen(state.message);

export const getMessage = (state: State) => message.getMessage(state.message);

export const isNavigationOpen = (state: State) =>
  navigation.isNavigationOpen(state.navigation);

export const isFetchingToken = (state: State) =>
  token.isFetchingToken(state.token);

export const getToken = (state: State) => token.getToken(state.token);

export const getTokenError = (state: State) => token.getTokenError(state.token);

export const isCreatingUser = (state: State) => user.isCreatingUser(state.user);

export const getUser = (state: State) => user.getUser(state.user);

export const getUserError = (state: State) => user.getUserError(state.user);

export const isFetchingArtists = (state: State) =>
  artist.isFetchingArtists(state.artists);

export const getArtists = createSelector<State, *, *, *, *>(
  state => state.entities.artists,
  state => state.artists.ids,
  (artists, ids) => getItemsById(artists, ids)
);

export const getArtistsError = (state: State) =>
  artist.getArtistsError(state.artists);
