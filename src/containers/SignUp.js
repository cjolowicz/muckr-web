// @flow
import { connect } from "react-redux";

import SignUp from "../components/SignUp";
import { createUser } from "../redux/actions/user";
import { getUser } from "../redux/reducers";

export default connect(
  state => ({ user: getUser(state) }),
  { onSubmit: createUser }
)(SignUp);
