// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Index from "../components/Index";
import { getToken } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token: getToken }),
  null
)(Index);
