// @flow
import { connect } from "react-redux";

import SignIn from "../components/SignIn";
import { fetchToken } from "../actions/fetchToken";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { onSubmit: fetchToken }
)(SignIn);
