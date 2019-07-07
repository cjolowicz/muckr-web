// @flow
import { createSelector } from "reselect";

import * as dialog from "./dialog/selectors";
import * as message$ from "./message/selectors";
import * as navigation from "./navigation/selectors";
import * as token$ from "./token/selectors";
import * as user from "./user/selectors";
import * as artist from "./artist/selectors";
import { getItemsById } from "../utils";
import type { State } from "./types";

export const dialogArtist = (state: State) => dialog.artist(state.dialog);

export const dialogType = (state: State) => dialog.type(state.dialog);

export const messageOpen = (state: State) => message$.open(state.message);

export const message = (state: State) => message$.message(state.message);

export const navigationOpen = (state: State) =>
  navigation.open(state.navigation);

export const token = (state: State) => token$.token(state.token);

export const isCreatingUser = (state: State) => user.isCreatingUser(state.user);

export const getUser = (state: State) => user.getUser(state.user);

export const getUserError = (state: State) => user.getUserError(state.user);

export const artistsPending = (state: State) => artist.pending(state.artists);

export const getArtists = createSelector<State, *, *, *, *>(
  state => state.entities.artists,
  state => state.artists.ids,
  (artists, ids) => getItemsById(artists, ids)
);
