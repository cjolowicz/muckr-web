// @flow
import type { State } from "./types";

export const open = (state: State) => state.message != null;

export const message = (state: State) => state.message;
