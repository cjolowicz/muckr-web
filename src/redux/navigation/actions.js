// @flow
import * as constants from "./constants";
import * as types from "./types";

export const openNavigation = (): types.OpenNavigationAction => ({
  type: constants.OPEN_NAVIGATION,
  payload: {}
});

export const closeNavigation = (): types.CloseNavigationAction => ({
  type: constants.CLOSE_NAVIGATION,
  payload: {}
});
