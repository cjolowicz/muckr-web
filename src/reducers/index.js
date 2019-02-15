// @flow
import { combineReducers } from "redux";

import navigation, * as fromNavigation from "./navigation";

export type State = {
  navigation: fromNavigation.State
};

export const isNavigationOpen = (state: State) =>
  fromNavigation.isNavigationOpen(state.navigation);

export default combineReducers({ navigation });
