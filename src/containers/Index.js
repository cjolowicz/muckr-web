// @flow
import { connect } from "react-redux";

import Index from "../components/Index";
import { getToken } from "../redux/selectors";

export default connect(
  state => ({ token: getToken(state) }),
  null
)(Index);
