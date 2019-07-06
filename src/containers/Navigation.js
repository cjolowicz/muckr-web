// @flow
import { connect } from "react-redux";

import Navigation from "../components/Navigation";
import { closeNavigation } from "../redux/navigation/actions";
import { isNavigationOpen } from "../redux/selectors";

export default connect(
  state => ({ open: isNavigationOpen(state) }),
  { onClose: closeNavigation }
)(Navigation);
