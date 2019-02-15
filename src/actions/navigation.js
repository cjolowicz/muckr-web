// @flow
export const OPEN_NAVIGATION = "OPEN_NAVIGATION";
export const CLOSE_NAVIGATION = "CLOSE_NAVIGATION";

export const openNavigation = () => ({
  type: OPEN_NAVIGATION
});

export const closeNavigation = () => ({
  type: CLOSE_NAVIGATION
});
