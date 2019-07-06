// @flow
import { combineReducers } from "redux";

import * as types from "./types";
import type { Action } from "../types";
import artists, * as fromArtists from "./artists/reducers";

export const initialState: types.State = {
  artists: fromArtists.initialState
};

export default combineReducers<Object, Action>({ artists });
