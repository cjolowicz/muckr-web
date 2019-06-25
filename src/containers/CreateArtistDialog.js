// @flow
import { connect } from "react-redux";

import CreateArtistDialog from "../components/CreateArtistDialog";
import { openCreateDialog, closeDialog } from "../actions/dialog";
import { isCreateDialogOpen } from "../reducers";

export default connect(
  state => ({
    open: isCreateDialogOpen(state)
  }),
  { openCreateDialog, closeDialog }
)(CreateArtistDialog);
