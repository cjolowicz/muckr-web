// @flow
import * as dialog from "./dialog/types";
import * as message from "./message/types";
import * as navigation from "./navigation/types";
import * as noop from "./noop/types";
import type { TokenAction } from "./token/actions";
import * as artist from "./artist/types";
import type { UserAction } from "./user/actions";

export type Action =
  | noop.Action
  | dialog.Action
  | message.Action
  | navigation.Action
  | TokenAction
  | artist.Action
  | UserAction;
