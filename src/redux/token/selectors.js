// @flow
import type { State } from "./types";

export const pending = (state: State) => state.isFetching;

export const token = (state: State) => state.token;

export const getTokenError = (state: State) => state.error;
