// @flow
import { connect } from "react-redux";

import FetchingArtistList from "../components/FetchingArtistList";
import { fetchArtists } from "../actions/fetchArtists";
import {
  getArtists,
  getArtistsError,
  isFetchingArtists,
  getToken
} from "../reducers";

export default connect(
  state => ({
    artists: getArtists(state),
    error: getArtistsError(state),
    isLoading: isFetchingArtists(state),
    token: getToken(state)
  }),
  { fetchArtists }
)(FetchingArtistList);
