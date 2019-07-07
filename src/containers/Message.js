// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Message from "../components/Message";
import { closeMessage } from "../redux/message/actions";
import { getMessage, messageOpen } from "../redux/selectors";
import type { Dispatch } from "../redux/types";

type Event = SyntheticEvent<HTMLButtonElement>;

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  onClose: (event: ?Event, reason: ?string) => {
    if (reason !== "clickaway") {
      dispatch(closeMessage());
    }
  }
});

export default connect(
  createStructuredSelector({
    open: messageOpen,
    message: getMessage
  }),
  mapDispatchToProps
)(Message);
