// @flow
import { combineReducers } from "redux";

import message, * as fromMessage from "./message";
import token, * as fromToken from "./token";
import artists, * as fromArtists from "./artists";
import type { Action } from "../actions";

export type State = {
  message: fromMessage.State,
  token: fromToken.State,
  artists: fromArtists.State
};

export const initialState: State = {
  message: fromMessage.initialState,
  token: fromToken.initialState,
  artists: fromArtists.initialState
};

export const isMessageOpen = (state: State) =>
  fromMessage.isMessageOpen(state.message);

export const getMessage = (state: State) =>
  fromMessage.getMessage(state.message);

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

export default combineReducers<Object, Action>({
  message,
  token,
  artists
});
