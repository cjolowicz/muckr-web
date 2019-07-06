// @flow
import { combineReducers } from "redux";

import type { Action } from "../actions";
import artists, * as fromArtists from "./artists/reducers";

export type State = {
  artists: fromArtists.State
};

export const initialState: State = {
  artists: fromArtists.initialState
};

export default combineReducers<Object, Action>({ artists });
