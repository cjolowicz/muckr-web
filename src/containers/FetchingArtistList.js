// @flow
import { connect } from "react-redux";

import FetchingArtistList from "../components/FetchingArtistList";
import { fetchArtists, createArtist, removeArtist } from "../actions/artist";
import { getArtists, isFetchingArtists, getToken } from "../reducers";

export default connect(
  state => ({
    artists: getArtists(state),
    isLoading: isFetchingArtists(state),
    token: getToken(state)
  }),
  { fetchArtists, createArtist, removeArtist }
)(FetchingArtistList);
