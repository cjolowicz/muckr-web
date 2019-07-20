// @flow
import type { State } from "./types";

export const open = (state: State) => state.type != null;

export const type = (state: State) => state.type;

export const artist = (state: State) => state.artist;
