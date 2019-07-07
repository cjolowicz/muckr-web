// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Message from "../components/Message";
import { closeMessage } from "../redux/message/actions";
import { message } from "../redux/selectors";

export default connect(
  createStructuredSelector({ message }),
  { closeMessage }
)(Message);
