// @flow
import { connect } from "react-redux";

import SignUp from "../components/SignUp";
import { createUser } from "../redux/user/operations";
import { getUser } from "../redux/selectors";

export default connect(
  state => ({ user: getUser(state) }),
  { onSubmit: createUser }
)(SignUp);
