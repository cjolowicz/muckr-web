// @flow
export const OPEN_NAVIGATION = "OPEN_NAVIGATION";
export const CLOSE_NAVIGATION = "CLOSE_NAVIGATION";

export type OpenNavigationAction = {
  type: typeof OPEN_NAVIGATION
};

export type CloseNavigationAction = {
  type: typeof CLOSE_NAVIGATION
};

export type NavigationAction = OpenNavigationAction | CloseNavigationAction;

export const openNavigation = (): OpenNavigationAction => ({
  type: OPEN_NAVIGATION
});

export const closeNavigation = (): CloseNavigationAction => ({
  type: CLOSE_NAVIGATION
});
