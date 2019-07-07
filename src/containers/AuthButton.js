// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AuthButton from "../components/AuthButton";
import { clearToken } from "../redux/token/actions";
import { token } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token }),
  { clearToken }
)(AuthButton);
