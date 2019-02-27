// @flow
import { connect } from "react-redux";
import type { Dispatch } from "react-redux";

import MenuButton from "../components/MenuButton";
import { openNavigation, closeNavigation } from "../actions/navigation";
import { isNavigationOpen } from "../reducers";

type Props = {
  navigationOpen: boolean
};

const mapDispatchToProps = (dispatch: Dispatch, { navigationOpen }: Props) => ({
  onMenuClick() {
    return dispatch(navigationOpen ? closeNavigation() : openNavigation());
  }
});

export default connect(
  state => ({ navigationOpen: isNavigationOpen(state) }),
  mapDispatchToProps
)(MenuButton);
