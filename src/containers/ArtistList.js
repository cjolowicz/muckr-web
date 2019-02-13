// @flow
import { connect } from "react-redux";

import ArtistList from "../components/ArtistList";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  null
)(ArtistList);
