// @flow
import type { Dispatch } from "redux";
import { connect } from "react-redux";

import Message from "../components/Message";
import { closeMessage } from "../redux/message/actions";
import { getMessage, isMessageOpen } from "../redux/selectors";
import type { Action } from "../redux/types";

type Event = SyntheticEvent<HTMLButtonElement>;

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
  onClose: (event: ?Event, reason: ?string) => {
    if (reason !== "clickaway") {
      dispatch(closeMessage());
    }
  }
});

export default connect(
  state => ({
    open: isMessageOpen(state),
    message: getMessage(state)
  }),
  mapDispatchToProps
)(Message);
