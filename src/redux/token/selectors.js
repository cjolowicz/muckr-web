// @flow
import type { State } from "./types";

export const pending = (state: State) => state.isFetching;

export const token = (state: State) => state.token;

export const error = (state: State) => state.error;
