// @flow
import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fade from "@material-ui/core/Fade";

import { spinner } from "../../redux/selectors";

type Props = {
  className: string,
  spinner: boolean
};

// eslint-disable-next-line no-shadow
export const Spinner = ({ className, spinner }: Props) => (
  <Fade
    in={spinner}
    style={{
      transitionDelay: spinner ? "800ms" : "0ms"
    }}
    unmountOnExit
  >
    <CircularProgress
      data-testid="spinner"
      className={className}
      color="secondary"
      size={30}
    />
  </Fade>
);

export default connect(
  createStructuredSelector({ spinner }),
  null
)(Spinner);
