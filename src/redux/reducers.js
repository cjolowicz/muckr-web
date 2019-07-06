// @flow
import { combineReducers } from "redux";

import dialog from "./dialog/reducers";
import message from "./message/reducers";
import navigation from "./navigation/reducers";
import token from "./token/reducers";
import user from "./user/reducers";
import entities from "./entities/reducers";
import artists from "./artist/reducers";
import type { Action } from "./types";

export default combineReducers<Object, Action>({
  dialog,
  message,
  navigation,
  token,
  user,
  artists,
  entities
});
