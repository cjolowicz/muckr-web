// @flow
import { connect } from "react-redux";

import ArtistDialog from "../components/ArtistDialog";
import { createArtist, updateArtist } from "../redux/actions/artist";
import { updateDialog, closeDialog } from "../redux/actions/dialog";
import { getDialogType, getDialogArtist, getToken } from "../redux/reducers";

export default connect(
  state => ({
    type: getDialogType(state),
    artist: getDialogArtist(state),
    token: getToken(state)
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
