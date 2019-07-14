// @flow
import * as constants from "./constants";

export type OpenMessageAction = {
  type: typeof constants.OPEN_MESSAGE,
  payload: {
    message: string
  }
};

export type CloseMessageAction = {
  type: typeof constants.CLOSE_MESSAGE,
  payload: {}
};

export type Action = OpenMessageAction | CloseMessageAction;

export type State = ?string;
