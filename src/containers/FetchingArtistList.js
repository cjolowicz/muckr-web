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
import { artists, artistsPending, token } from "../redux/selectors";

export default connect(
  createStructuredSelector({
    artists,
    isLoading: artistsPending,
    token
  }),
  {
    fetchArtists,
    createArtist,
    removeArtist,
    openCreateDialog,
    openUpdateDialog
  }
)(FetchingArtistList);
