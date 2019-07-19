// @flow
import { combineReducers } from "redux";

import dialog from "./dialog/reducers";
import message from "./message/reducers";
import navigation from "./navigation/reducers";
import token from "./token/reducers";
import user from "./user/reducers";
import entities from "./entities/reducers";
import artists from "./artist/reducers";
import spinner from "./spinner/reducers";
import type { Action, State } from "./types";

export default combineReducers<State, Action>({
  dialog,
  message,
  navigation,
  token,
  user,
  artists,
  entities,
  spinner
});
