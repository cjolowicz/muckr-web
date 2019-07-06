// @flow
import { combineReducers } from "redux";

import type { Action, State } from "../types";
import artists from "./artists/reducers";

export default combineReducers<State, Action>({ artists });
