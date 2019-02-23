// @flow
import type { MessageAction } from "./message";
import type { NavigationAction } from "./navigation";
import type { NoopAction } from "./noop";
import type { FetchTokenAction } from "./token";
import type { FetchArtistsAction } from "./fetchArtists";

export type Action =
  | NoopAction
  | MessageAction
  | NavigationAction
  | FetchTokenAction
  | FetchArtistsAction;
