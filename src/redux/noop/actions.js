// @flow
import * as constants from "./constants";

export type NoopAction = {
  type: typeof constants.NOOP,
  payload: {}
};

// eslint-disable-next-line import/prefer-default-export
export const noop = (): NoopAction => ({
  type: constants.NOOP,
  payload: {}
});
