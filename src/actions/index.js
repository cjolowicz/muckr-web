// @flow
import type { MessageAction } from "./message";
import type { NavigationAction } from "./navigation";
import type { NoopAction } from "./noop";
import type { TokenAction } from "./token";
import type { FetchArtistsAction } from "./artist";

export type Action =
  | NoopAction
  | MessageAction
  | NavigationAction
  | TokenAction
  | FetchArtistsAction;
