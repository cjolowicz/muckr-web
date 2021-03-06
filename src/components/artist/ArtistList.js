// @flow
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { makeStyles } from "@material-ui/styles";

import * as api from "../../api/types";
import {
  fetchArtists,
  createArtist,
  removeArtist
} from "../../redux/artist/operations";
import { openUpdateDialog } from "../../redux/dialog/actions";
import { artists, token } from "../../redux/selectors";

export type Props = {
  token: ?string,
  artists: Array<api.Artist>,
  removeArtist: Function,
  fetchArtists: Function,
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
  }
});

export const ArtistList = ({
  /* eslint-disable no-shadow */
  token,
  artists,
  removeArtist,
  fetchArtists,
  openUpdateDialog
}: Props) => {
  /* eslint-enable */
  useEffect(() => {
    if (token) {
      fetchArtists(token);
    }
  }, [token, fetchArtists]);

  const classes = useStyles();

  return (
    <List>
      {artists.map(artist => (
        <ListItem key={artist.id} button classes={{ container: classes.item }}>
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
  );
};

export default connect(
  createStructuredSelector({
    artists,
    token
  }),
  {
    fetchArtists,
    createArtist,
    removeArtist,
    openUpdateDialog
  }
)(ArtistList);
