// @flow
import { combineReducers } from "redux";

import type { Action } from "../types";
import artists from "./artists/reducers";

export default combineReducers<Object, Action>({ artists });
