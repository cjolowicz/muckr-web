// @flow
import { connect } from "react-redux";

import AuthButton from "../components/AuthButton";
import { clearToken } from "../redux/actions/token";
import { getToken } from "../redux/reducers";

export default connect(
  state => ({ token: getToken(state) }),
  { clearToken }
)(AuthButton);
