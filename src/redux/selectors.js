// @flow
import { createSelector } from "reselect";

import * as dialog from "./dialog/selectors";
import * as artist from "./artist/selectors";
import { getItemsById } from "../utils";
import type { State } from "./types";

export const dialogArtist = (state: State) => dialog.artist(state.dialog);

export const dialogType = (state: State) => dialog.type(state.dialog);

export const message = (state: State) => state.message;

export const navigationOpen = (state: State) => state.navigation;

export const token = (state: State) => state.token;

export const user = (state: State) => state.user;

export const artistsPending = (state: State) => artist.pending(state.artists);

export const artists = createSelector<State, *, *, *, *>(
  state => state.entities.artists,
  state => state.artists.ids,
  (artists$, ids) => getItemsById(artists$, ids)
);
