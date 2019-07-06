// @flow
import type { DialogAction } from "../dialog/actions";
import type { MessageAction } from "../message/actions";
import type { NavigationAction } from "../navigation/actions";
import type { NoopAction } from "./noop";
import type { TokenAction } from "./token";
import type { ArtistAction } from "../artist/actions";

export type Action =
  | NoopAction
  | DialogAction
  | MessageAction
  | NavigationAction
  | TokenAction
  | ArtistAction;
