// @flow
import { connect } from "react-redux";

import UpdateArtistDialog from "../components/UpdateArtistDialog";
import { updateDialog, closeDialog } from "../actions/dialog";
import { updateArtist } from "../actions/artist";
import { isUpdateDialogOpen, getToken, getDialogArtist } from "../reducers";

export default connect(
  state => ({
    open: isUpdateDialogOpen(state),
    token: getToken(state),
    artist: getDialogArtist(state)
  }),
  { updateDialog, closeDialog, updateArtist }
)(UpdateArtistDialog);
