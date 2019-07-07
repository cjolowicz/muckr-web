// @flow
import * as redux from "redux";

import * as dialog from "./dialog/types";
import * as message from "./message/types";
import * as navigation from "./navigation/types";
import * as noop from "./noop/types";
import * as token from "./token/types";
import * as artist from "./artist/types";
import * as user from "./user/types";
import * as entities from "./entities/types";

export type Action =
  | noop.Action
  | dialog.Action
  | message.Action
  | navigation.Action
  | token.Action
  | artist.Action
  | user.Action;

export type State = {
  dialog: dialog.State,
  message: message.State,
  navigation: navigation.State,
  token: token.State,
  user: user.State,
  artists: artist.State,
  entities: entities.State
};

export type Store = redux.Store<State, Action>;

export type StoreCreator = redux.StoreCreator<State, Action>;

export type Dispatch = redux.Dispatch<Action>;
