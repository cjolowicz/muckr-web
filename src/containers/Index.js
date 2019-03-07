// @flow
import { connect } from "react-redux";

import Index from "../components/Index";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  null
)(Index);
