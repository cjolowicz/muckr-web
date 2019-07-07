// @flow
import type { State } from "./types";

export const pending = (state: State) => state.pending;

export const user = (state: State) => state.user;

export const error = (state: State) => state.error;
