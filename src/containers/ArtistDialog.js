// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ArtistDialog from "../components/ArtistDialog";
import { createArtist, updateArtist } from "../redux/artist/operations";
import { updateDialog, closeDialog } from "../redux/dialog/actions";
import { dialogType, dialogArtist, getToken } from "../redux/selectors";

export default connect(
  createStructuredSelector({
    type: dialogType,
    artist: dialogArtist,
    token: getToken
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
