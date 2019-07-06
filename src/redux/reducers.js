// @flow
import { combineReducers } from "redux";

import dialog, * as fromDialog from "./dialog/reducers";
import message, * as fromMessage from "./message/reducers";
import navigation, * as fromNavigation from "./navigation/reducers";
import token, * as fromToken from "./token/reducers";
import user, * as fromUser from "./user/reducers";
import entities, * as fromEntities from "./entities/reducers";
import artists, * as fromArtists from "./artist/reducers";
import type { Action, State } from "./types";

export const initialState: State = {
  dialog: fromDialog.initialState,
  message: fromMessage.initialState,
  navigation: fromNavigation.initialState,
  token: fromToken.initialState,
  user: fromUser.initialState,
  artists: fromArtists.initialState,
  entities: fromEntities.initialState
};

export default combineReducers<Object, Action>({
  dialog,
  message,
  navigation,
  token,
  user,
  artists,
  entities
});
