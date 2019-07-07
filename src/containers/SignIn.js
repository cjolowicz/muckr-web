// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignIn from "../components/SignIn";
import { fetchToken } from "../redux/token/operations";
import { getToken } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token: getToken }),
  { onSubmit: fetchToken }
)(SignIn);
