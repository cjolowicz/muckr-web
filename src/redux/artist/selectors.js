// @flow
import type { State } from "./types";

export const isFetchingArtists = (state: State) => state.isFetching;

export const getArtistsError = (state: State) => state.error;
