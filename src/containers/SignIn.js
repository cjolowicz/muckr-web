// @flow
import { connect } from "react-redux";

import SignIn from "../components/SignIn";
import { fetchToken } from "../actions/fetchToken";
import { getToken, getTokenError } from "../reducers";

export default connect(
  state => ({
    token: getToken(state),
    error: getTokenError(state)
  }),
  { onSubmit: fetchToken }
)(SignIn);
