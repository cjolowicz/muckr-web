// @flow
import * as dialog from "./dialog/types";
import * as message from "./message/types";
import type { NavigationAction } from "./navigation/actions";
import type { NoopAction } from "./noop/actions";
import type { TokenAction } from "./token/actions";
import * as artist from "./artist/types";
import type { UserAction } from "./user/actions";

export type Action =
  | NoopAction
  | dialog.Action
  | message.Action
  | NavigationAction
  | TokenAction
  | artist.Action
  | UserAction;
