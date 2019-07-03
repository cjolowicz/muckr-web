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
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";

import type { Artist } from "../api/artist";
import CreateArtistDialog from "../containers/CreateArtistDialog";
import UpdateArtistDialog from "../containers/UpdateArtistDialog";

export type Props = {
  token: ?string,
  artists: Array<Artist>,
  isLoading: boolean,
  createArtist: Function,
  removeArtist: Function,
  openCreateDialog: Function,
  openUpdateDialog: Function
};

const useStyles = makeStyles({
  delete: {},
  item: {
    "& $delete": {
      visibility: "hidden"
    },
    "&:hover $delete": {
      visibility: "visible"
    }
  },
  fab: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  }
});

const ArtistList = ({
  token,
  artists,
  isLoading,
  createArtist,
  removeArtist,
  openCreateDialog,
  openUpdateDialog
}: Props) => {
  const classes = useStyles();
  return (
    <>
      {isLoading ? <Typography>Loading...</Typography> : null}
      <List>
        {artists.map(artist => (
          <ListItem
            key={artist.id}
            button
            classes={{ container: classes.item }}
          >
            <ListItemText primary={artist.name} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Edit"
                title="Edit"
                className={classes.delete}
                onClick={() => openUpdateDialog(artist)}
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
      <Fab
        title="Add"
        color="primary"
        onClick={openCreateDialog}
        className={classes.fab}
      >
        <AddIcon />
      </Fab>
      <CreateArtistDialog token={token} createArtist={createArtist} />
      <UpdateArtistDialog />
    </>
  );
};

export default ArtistList;
