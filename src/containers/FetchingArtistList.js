// @flow
import { connect } from "react-redux";

import FetchingArtistList from "../components/FetchingArtistList";
import { getToken } from "../reducers";

export default connect(
  state => ({ token: getToken(state) }),
  null
)(FetchingArtistList);
