// @flow
import { connect } from "react-redux";

import FetchingArtistList from "../components/FetchingArtistList";
import {
  fetchArtists,
  createArtist,
  removeArtist
} from "../redux/artist/actions";
import { openCreateDialog, openUpdateDialog } from "../redux/dialog/actions";
import { getArtists, isFetchingArtists, getToken } from "../redux/reducers";

export default connect(
  state => ({
    artists: getArtists(state),
    isLoading: isFetchingArtists(state),
    token: getToken(state)
  }),
  {
    fetchArtists,
    createArtist,
    removeArtist,
    openCreateDialog,
    openUpdateDialog
  }
)(FetchingArtistList);
