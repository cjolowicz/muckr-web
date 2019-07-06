// @flow
import { connect } from "react-redux";

import SignIn from "../components/SignIn";
import { fetchToken } from "../redux/actions/token";
import { getToken } from "../redux/reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { onSubmit: fetchToken }
)(SignIn);
