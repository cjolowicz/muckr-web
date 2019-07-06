// @flow
import { combineReducers } from "redux";

import dialog, * as fromDialog from "../dialog/reducers";
import message, * as fromMessage from "./message";
import navigation, * as fromNavigation from "./navigation";
import token, * as fromToken from "./token";
import user, * as fromUser from "./user";
import artists, * as fromArtists from "../artist/reducers";
import entities, * as fromEntities from "./entities";
import type { Action } from "../actions";
import { getItemsById } from "../../utils";

export type State = {
  dialog: fromDialog.State,
  message: fromMessage.State,
  navigation: fromNavigation.State,
  token: fromToken.State,
  user: fromUser.State,
  artists: fromArtists.State,
  entities: fromEntities.State
};

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
  fromDialog.isCreateDialogOpen(state.dialog);

export const isUpdateDialogOpen = (state: State) =>
  fromDialog.isUpdateDialogOpen(state.dialog);

export const getDialogArtist = (state: State) =>
  fromDialog.getDialogArtist(state.dialog);

export const getDialogType = (state: State) =>
  fromDialog.getDialogType(state.dialog);

export const isMessageOpen = (state: State) =>
  fromMessage.isMessageOpen(state.message);

export const getMessage = (state: State) =>
  fromMessage.getMessage(state.message);

export const isNavigationOpen = (state: State) =>
  fromNavigation.isNavigationOpen(state.navigation);

export const isFetchingToken = (state: State) =>
  fromToken.isFetchingToken(state.token);

export const getToken = (state: State) => fromToken.getToken(state.token);

export const getTokenError = (state: State) =>
  fromToken.getTokenError(state.token);

export const isCreatingUser = (state: State) =>
  fromUser.isCreatingUser(state.user);

export const getUser = (state: State) => fromUser.getUser(state.user);

export const getUserError = (state: State) => fromUser.getUserError(state.user);

export const isFetchingArtists = (state: State) =>
  fromArtists.isFetchingArtists(state.artists);

export const getArtists = (state: State) =>
  getItemsById(state.entities.artists, state.artists.ids);

export const getArtistsError = (state: State) =>
  fromArtists.getArtistsError(state.artists);

export default combineReducers<Object, Action>({
  dialog,
  message,
  navigation,
  token,
  user,
  artists,
  entities
});
