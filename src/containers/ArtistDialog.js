// @flow
import { connect } from "react-redux";

import ArtistDialog from "../components/ArtistDialog";
import { createArtist, updateArtist } from "../actions/artist";
import { updateDialog, closeDialog } from "../actions/dialog";
import { getDialogType, getDialogArtist, getToken } from "../reducers";

export default connect(
  state => ({
    type: getDialogType(state),
    artist: getDialogArtist(state),
    token: getToken(state)
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
