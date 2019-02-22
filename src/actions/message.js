// @flow
export const OPEN_MESSAGE = "OPEN_MESSAGE";
export const CLOSE_MESSAGE = "CLOSE_MESSAGE";

export type OpenMessageAction = {
  type: typeof OPEN_MESSAGE,
  message: string
};

export type CloseMessageAction = {
  type: typeof CLOSE_MESSAGE
};

export type MessageAction = OpenMessageAction | CloseMessageAction;

export const openMessage = (message: string): OpenMessageAction => ({
  type: OPEN_MESSAGE,
  message
});

export const closeMessage = (): CloseMessageAction => ({
  type: CLOSE_MESSAGE
});
