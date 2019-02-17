// @flow
export const OPEN_MESSAGE = "OPEN_MESSAGE";
export const CLOSE_MESSAGE = "CLOSE_MESSAGE";

export const openMessage = (message: string) => ({
  type: OPEN_MESSAGE,
  message
});

export const closeMessage = () => ({
  type: CLOSE_MESSAGE
});
