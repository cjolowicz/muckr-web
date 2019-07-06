// @flow
import type { State } from "./types";

export const isFetchingToken = (state: State) => state.isFetching;

export const getToken = (state: State) => state.token;

export const getTokenError = (state: State) => state.error;
