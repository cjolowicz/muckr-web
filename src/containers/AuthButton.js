// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import AuthButton from "../components/AuthButton";
import { clearToken } from "../redux/token/actions";
import { getToken } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token: getToken }),
  { clearToken }
)(AuthButton);
