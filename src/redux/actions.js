// @flow
import * as dialog from "./dialog/types";
import * as message from "./message/types";
import * as navigation from "./navigation/types";
import * as noop from "./noop/types";
import * as token from "./token/types";
import * as artist from "./artist/types";
import type { UserAction } from "./user/types";

export type Action =
  | noop.Action
  | dialog.Action
  | message.Action
  | navigation.Action
  | token.Action
  | artist.Action
  | UserAction;
