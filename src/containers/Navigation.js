// @flow
import { connect } from "react-redux";

import Navigation from "../components/Navigation";
import { closeNavigation } from "../actions/navigation";
import { isNavigationOpen } from "../reducers";

export default connect(
  state => ({ open: isNavigationOpen(state) }),
  { onClose: closeNavigation }
)(Navigation);
