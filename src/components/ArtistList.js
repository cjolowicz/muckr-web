// @flow
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";

import type { Artist } from "../api/artist";
import CreateArtistDialog from "./CreateArtistDialog";

export type Props = {
  token: ?string,
  artists: ?Array<Artist>,
  isLoading: boolean,
  createArtist: Function
};

const ArtistList = ({ token, artists, isLoading, createArtist }: Props) => (
  <>
    {isLoading ? <Typography>Loading...</Typography> : null}
    <List>
      {artists &&
        artists.map(artist => (
          <ListItem key={artist.id} button>
            <ListItemText primary={artist.name} />
            <ListItemSecondaryAction>
              <IconButton aria-label="Delete" title="Delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
    <CreateArtistDialog token={token} createArtist={createArtist} />
  </>
);

export default ArtistList;
