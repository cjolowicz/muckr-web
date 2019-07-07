// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import PrivateRoute from "../components/PrivateRoute";
import { getToken } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token: getToken }),
  null
)(PrivateRoute);
