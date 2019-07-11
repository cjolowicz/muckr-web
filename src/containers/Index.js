// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Index from "../components/pages/Index";
import { token } from "../redux/selectors";

export default connect(
  createStructuredSelector({ token }),
  null
)(Index);
