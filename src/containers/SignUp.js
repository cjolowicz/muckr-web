// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import SignUp from "../components/SignUp";
import { createUser } from "../redux/user/operations";
import { user } from "../redux/selectors";

export default connect(
  createStructuredSelector({ user }),
  { onSubmit: createUser }
)(SignUp);
