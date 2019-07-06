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

export type MessageAction = OpenMessageAction | CloseMessageAction;

export const openMessage = (message: string): OpenMessageAction => ({
  type: constants.OPEN_MESSAGE,
  payload: { message }
});

export const closeMessage = (): CloseMessageAction => ({
  type: constants.CLOSE_MESSAGE,
  payload: {}
});
