// @flow
import { connect } from "react-redux";

import AuthButton from "../components/AuthButton";
import { clearToken } from "../redux/token/actions";
import { getToken } from "../redux/selectors";

export default connect(
  state => ({ token: getToken(state) }),
  { clearToken }
)(AuthButton);
