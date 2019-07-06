// @flow
import * as constants from "./constants";

export type OpenNavigationAction = {
  type: typeof constants.OPEN_NAVIGATION,
  payload: {}
};

export type CloseNavigationAction = {
  type: typeof constants.CLOSE_NAVIGATION,
  payload: {}
};

export type NavigationAction = OpenNavigationAction | CloseNavigationAction;

export const openNavigation = (): OpenNavigationAction => ({
  type: constants.OPEN_NAVIGATION,
  payload: {}
});

export const closeNavigation = (): CloseNavigationAction => ({
  type: constants.CLOSE_NAVIGATION,
  payload: {}
});
