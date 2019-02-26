// @flow
import { connect } from "react-redux";

import SignUp from "../components/SignUp";
import { fetchToken } from "../actions/token";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { onSubmit: fetchToken }
)(SignUp);
