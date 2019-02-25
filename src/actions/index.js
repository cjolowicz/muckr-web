// @flow
import type { MessageAction } from "./message";
import type { NoopAction } from "./noop";
import type { TokenAction } from "./token";
import type { ArtistAction } from "./artist";

export type Action = NoopAction | MessageAction | TokenAction | ArtistAction;
