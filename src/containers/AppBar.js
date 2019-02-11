// @flow
import { connect } from "react-redux";

import AppBar from "../components/AppBar";
import { openNavigation } from "../actions/navigation";

export default connect(
  null,
  { onMenuClick: openNavigation }
)(AppBar);
