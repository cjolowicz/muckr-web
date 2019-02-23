// @flow
import type { MessageAction } from "./message";
import type { NavigationAction } from "./navigation";
import type { NoopAction } from "./noop";
import type { FetchTokenAction } from "./token";
import type { FetchArtistsAction } from "./artist";

export type Action =
  | NoopAction
  | MessageAction
  | NavigationAction
  | FetchTokenAction
  | FetchArtistsAction;
