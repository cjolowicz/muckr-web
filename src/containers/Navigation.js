// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Navigation from "../components/Navigation";
import { closeNavigation } from "../redux/navigation/actions";
import { isNavigationOpen } from "../redux/selectors";

export default connect(
  createStructuredSelector({ open: isNavigationOpen }),
  { onClose: closeNavigation }
)(Navigation);
