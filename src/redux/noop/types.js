// @flow
import * as constants from "./constants";

export type NoopAction = {
  type: typeof constants.NOOP,
  payload: {}
};
