// @flow
import type { State } from "./types";

export const pending = (state: State) => state.pending;

export const getUser = (state: State) => state.user;

export const getUserError = (state: State) => state.error;
