// @flow
import { combineReducers } from "redux";

import navigation, * as fromNavigation from "./navigation";
import token, * as fromToken from "./token";

export type State = {
  navigation: fromNavigation.State,
  token: fromToken.State
};

export const isNavigationOpen = (state: State) =>
  fromNavigation.isNavigationOpen(state.navigation);

export const isFetchingToken = (state: State) =>
  fromToken.isFetchingToken(state.token);

export const getToken = (state: State) => fromToken.getToken(state.token);

export const getTokenError = (state: State) =>
  fromToken.getTokenError(state.token);

export default combineReducers({ navigation, token });
