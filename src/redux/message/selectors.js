// @flow
import type { State } from "./types";

export const isMessageOpen = (state: State) => state.open;

export const getMessage = (state: State) => state.message;
