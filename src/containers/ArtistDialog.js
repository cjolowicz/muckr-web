// @flow
import { connect } from "react-redux";

import ArtistDialog from "../components/ArtistDialog";
import { createArtist, updateArtist } from "../redux/artist/actions";
import { updateDialog, closeDialog } from "../redux/dialog/actions";
import { getDialogType, getDialogArtist, getToken } from "../redux/reducers";

export default connect(
  state => ({
    type: getDialogType(state),
    artist: getDialogArtist(state),
    token: getToken(state)
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
