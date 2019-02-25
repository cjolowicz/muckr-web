// @flow
import { connect } from "react-redux";

import AppBar from "../components/AppBar";
import { clearToken } from "../actions/token";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { clearToken }
)(AppBar);
