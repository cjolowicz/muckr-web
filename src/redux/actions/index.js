// @flow
import type { DialogAction } from "../dialog/actions";
import type { MessageAction } from "../message/actions";
import type { NavigationAction } from "../navigation/actions";
import type { NoopAction } from "../noop/actions";
import type { TokenAction } from "../token/actions";
import type { ArtistAction } from "../artist/actions";

export type Action =
  | NoopAction
  | DialogAction
  | MessageAction
  | NavigationAction
  | TokenAction
  | ArtistAction;
