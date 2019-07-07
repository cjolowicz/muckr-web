// @flow
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ArtistDialog from "../components/ArtistDialog";
import { createArtist, updateArtist } from "../redux/artist/operations";
import { updateDialog, closeDialog } from "../redux/dialog/actions";
import { dialogType, dialogArtist, token } from "../redux/selectors";

export default connect(
  createStructuredSelector({
    type: dialogType,
    artist: dialogArtist,
    token
  }),
  { createArtist, updateArtist, updateDialog, closeDialog }
)(ArtistDialog);
