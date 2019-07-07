// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Message from "../components/Message";
import { closeMessage } from "../redux/message/actions";
import { message, messageOpen } from "../redux/selectors";

export default connect(
  createStructuredSelector({
    open: messageOpen,
    message
  }),
  { closeMessage }
)(Message);
