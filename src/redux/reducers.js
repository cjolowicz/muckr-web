// @flow
import { combineReducers } from "redux";

import dialog, * as fromDialog from "./dialog/reducers";
import * as dialogSelectors from "./dialog/selectors";
import message, * as fromMessage from "./message/reducers";
import * as messageSelectors from "./message/selectors";
import navigation, * as fromNavigation from "./navigation/reducers";
import * as navigationSelectors from "./navigation/selectors";
import token, * as fromToken from "./token/reducers";
import * as tokenSelectors from "./token/selectors";
import user, * as fromUser from "./user/reducers";
import * as userSelectors from "./user/selectors";
import entities, * as fromEntities from "./entities/reducers";
import artists, * as fromArtists from "./artist/reducers";
import * as artistSelectors from "./artist/selectors";
import type { Action, State } from "./types";
import { getItemsById } from "../utils";

export const initialState: State = {
  dialog: fromDialog.initialState,
  message: fromMessage.initialState,
  navigation: fromNavigation.initialState,
  token: fromToken.initialState,
  user: fromUser.initialState,
  artists: fromArtists.initialState,
  entities: fromEntities.initialState
};

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

export default combineReducers<Object, Action>({
  dialog,
  message,
  navigation,
  token,
  user,
  artists,
  entities
});
