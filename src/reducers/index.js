// @flow
import { combineReducers } from "redux";

import navigation, * as fromNavigation from "./navigation";
import token, * as fromToken from "./token";
import artists, * as fromArtists from "./artists";

export type State = {
  navigation: fromNavigation.State,
  token: fromToken.State,
  artists: fromArtists.State
};

export const isNavigationOpen = (state: State) =>
  fromNavigation.isNavigationOpen(state.navigation);

export const isFetchingToken = (state: State) =>
  fromToken.isFetchingToken(state.token);

export const getToken = (state: State) => fromToken.getToken(state.token);

export const getTokenError = (state: State) =>
  fromToken.getTokenError(state.token);

export const isFetchingArtists = (state: State) =>
  fromArtists.isFetchingArtists(state.artists);

export const getArtists = (state: State) =>
  fromArtists.getArtists(state.artists);

export const getArtistsError = (state: State) =>
  fromArtists.getArtistsError(state.artists);

export default combineReducers({ navigation, token, artists });
