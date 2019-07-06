// @flow
import * as dialogSelectors from "./dialog/selectors";
import * as messageSelectors from "./message/selectors";
import * as navigationSelectors from "./navigation/selectors";
import * as tokenSelectors from "./token/selectors";
import * as userSelectors from "./user/selectors";
import * as artistSelectors from "./artist/selectors";
import { getItemsById } from "../utils";
import type { State } from "./types";

export const isCreateDialogOpen = (state: State) =>
  dialogSelectors.isCreateDialogOpen(state.dialog);

export const isUpdateDialogOpen = (state: State) =>
  dialogSelectors.isUpdateDialogOpen(state.dialog);

export const getDialogArtist = (state: State) =>
  dialogSelectors.getDialogArtist(state.dialog);

export const getDialogType = (state: State) =>
  dialogSelectors.getDialogType(state.dialog);

export const isMessageOpen = (state: State) =>
  messageSelectors.isMessageOpen(state.message);

export const getMessage = (state: State) =>
  messageSelectors.getMessage(state.message);

export const isNavigationOpen = (state: State) =>
  navigationSelectors.isNavigationOpen(state.navigation);

export const isFetchingToken = (state: State) =>
  tokenSelectors.isFetchingToken(state.token);

export const getToken = (state: State) => tokenSelectors.getToken(state.token);

export const getTokenError = (state: State) =>
  tokenSelectors.getTokenError(state.token);

export const isCreatingUser = (state: State) =>
  userSelectors.isCreatingUser(state.user);

export const getUser = (state: State) => userSelectors.getUser(state.user);

export const getUserError = (state: State) =>
  userSelectors.getUserError(state.user);

export const isFetchingArtists = (state: State) =>
  artistSelectors.isFetchingArtists(state.artists);

export const getArtists = (state: State) =>
  getItemsById(state.entities.artists, state.artists.ids);

export const getArtistsError = (state: State) =>
  artistSelectors.getArtistsError(state.artists);
