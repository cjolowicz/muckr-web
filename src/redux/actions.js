// @flow
import * as dialog from "./dialog/types";
import * as message from "./message/types";
import * as navigation from "./navigation/types";
import type { NoopAction } from "./noop/types";
import type { TokenAction } from "./token/actions";
import * as artist from "./artist/types";
import type { UserAction } from "./user/actions";

export type Action =
  | NoopAction
  | dialog.Action
  | message.Action
  | navigation.Action
  | TokenAction
  | artist.Action
  | UserAction;
