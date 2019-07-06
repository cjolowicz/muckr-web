// @flow
import { connect } from "react-redux";

import SignIn from "../components/SignIn";
import { fetchToken } from "../redux/token/operations";
import { getToken } from "../redux/selectors";

export default connect(
  state => ({ token: getToken(state) }),
  { onSubmit: fetchToken }
)(SignIn);
