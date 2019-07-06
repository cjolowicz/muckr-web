// @flow
import * as constants from "./constants";
import * as types from "./types";

// eslint-disable-next-line import/prefer-default-export
export const noop = (): types.NoopAction => ({
  type: constants.NOOP,
  payload: {}
});
