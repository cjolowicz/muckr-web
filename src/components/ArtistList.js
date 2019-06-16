// @flow
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import type { Artist } from "../api/artist";
import CreateArtistDialog from "./CreateArtistDialog";
import UpdateArtistDialog from "../containers/UpdateArtistDialog";

export type Props = {
  classes: Object,
  token: ?string,
  artists: Array<Artist>,
  isLoading: boolean,
  createArtist: Function,
  removeArtist: Function,
  openDialog: Function
};

const ArtistList = ({
  classes,
  token,
  artists,
  isLoading,
  createArtist,
  removeArtist,
  openDialog
}: Props) => (
  <>
    {isLoading ? <Typography>Loading...</Typography> : null}
    <List>
      {artists.map(artist => (
        <ListItem key={artist.id} button classes={{ container: classes.item }}>
          <ListItemText primary={artist.name} />
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Edit"
              title="Edit"
              className={classes.delete}
              onClick={() => openDialog(artist)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="Delete"
              title="Delete"
              className={classes.delete}
              onClick={() => removeArtist(token, artist.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
    <CreateArtistDialog token={token} createArtist={createArtist} />
    <UpdateArtistDialog />
  </>
);

const styles = {
  delete: {},
  item: {
    "& $delete": {
      visibility: "hidden"
    },
    "&:hover $delete": {
      visibility: "visible"
    }
  }
};

export default withStyles(styles)(ArtistList);
