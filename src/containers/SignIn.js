// @flow
import { connect } from "react-redux";

import SignIn from "../components/SignIn";
import { fetchToken } from "../actions/token";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { onSubmit: fetchToken }
)(SignIn);
