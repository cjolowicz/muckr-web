// @flow
import { connect } from "react-redux";

import MenuButton from "../components/MenuButton";
import { openNavigation } from "../redux/navigation/actions";

export default connect(
  null,
  { openNavigation }
)(MenuButton);
