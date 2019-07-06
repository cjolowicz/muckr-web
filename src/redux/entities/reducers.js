// @flow
import { combineReducers } from "redux";

import type { Action } from "../actions";
import artists, * as fromArtists from "./artists/reducers";
import * as artistsTypes from "./artists/types";

export type State = {
  artists: artistsTypes.State
};

export const initialState: State = {
  artists: fromArtists.initialState
};

export default combineReducers<Object, Action>({ artists });
