// @flow
import { connect } from "react-redux";

import App from "../components/App";
import { closeNavigation } from "../actions";

const mapStateToProps = state => ({
  navigationOpen: state.navigation.open
});

export default connect(
  mapStateToProps,
  { closeNavigation }
)(App);
