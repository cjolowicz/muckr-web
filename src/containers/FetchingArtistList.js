// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import FetchingArtistList from "../components/FetchingArtistList";
import {
  fetchArtists,
  createArtist,
  removeArtist
} from "../redux/artist/operations";
import { openCreateDialog, openUpdateDialog } from "../redux/dialog/actions";
import { getArtists, isFetchingArtists, getToken } from "../redux/selectors";

export default connect(
  createStructuredSelector({
    artists: getArtists,
    isLoading: isFetchingArtists,
    token: getToken
  }),
  {
    fetchArtists,
    createArtist,
    removeArtist,
    openCreateDialog,
    openUpdateDialog
  }
)(FetchingArtistList);
