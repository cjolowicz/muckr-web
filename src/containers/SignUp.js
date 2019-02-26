// @flow
import { connect } from "react-redux";

import SignUp from "../components/SignUp";
import { createUser } from "../actions/user";
import { getUser } from "../reducers";

export default connect(
  state => ({ user: getUser(state) }),
  { onSubmit: createUser }
)(SignUp);
