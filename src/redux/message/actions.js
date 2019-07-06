// @flow
import * as constants from "./constants";
import * as types from "./types";

export const openMessage = (message: string): types.OpenMessageAction => ({
  type: constants.OPEN_MESSAGE,
  payload: { message }
});

export const closeMessage = (): types.CloseMessageAction => ({
  type: constants.CLOSE_MESSAGE,
  payload: {}
});
