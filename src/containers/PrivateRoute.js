// @flow
import { connect } from "react-redux";

import PrivateRoute from "../components/PrivateRoute";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  null
)(PrivateRoute);
