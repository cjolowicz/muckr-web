// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PrivateRoute from "../components/PrivateRoute";
import { token } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token }),
  null
)(PrivateRoute);
