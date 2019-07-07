// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignUp from "../components/SignUp";
import { createUser } from "../redux/user/operations";
import { getUser } from "../redux/selectors";

export default connect(
  createStructuredSelector({ user: getUser }),
  { onSubmit: createUser }
)(SignUp);
