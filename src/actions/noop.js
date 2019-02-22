// @flow
export const NOOP = "NOOP";

export type NoopAction = {
  type: typeof NOOP
};

export const noop = (): NoopAction => ({
  type: NOOP
});
