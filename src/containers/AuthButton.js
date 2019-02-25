// @flow
import { connect } from "react-redux";

import AuthButton from "../components/AuthButton";
import { clearToken } from "../actions/token";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { clearToken }
)(AuthButton);
