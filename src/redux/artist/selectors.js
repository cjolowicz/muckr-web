// @flow
import type { State } from "./types";

export const fetchingArtists = (state: State) => state.isFetching;

export const artistsError = (state: State) => state.error;
