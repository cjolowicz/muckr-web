// @flow
import type { DialogAction } from "./dialog";
import type { MessageAction } from "./message";
import type { NavigationAction } from "./navigation";
import type { NoopAction } from "./noop";
import type { TokenAction } from "./token";
import type { ArtistAction } from "./artist";

export type Action =
  | NoopAction
  | DialogAction
  | MessageAction
  | NavigationAction
  | TokenAction
  | ArtistAction;
