// @flow
import { connect } from "react-redux";

import MenuButton from "../components/MenuButton";
import { openNavigation } from "../actions/navigation";

export default connect(
  null,
  { onMenuClick: openNavigation }
)(MenuButton);
