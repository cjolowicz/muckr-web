// @flow
export const NOOP = "NOOP";

export type NoopAction = {
  type: typeof NOOP,
  payload: {}
};

export const noop = (): NoopAction => ({
  type: NOOP,
  payload: {}
});
