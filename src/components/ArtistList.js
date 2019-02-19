// @flow
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import type { Artist } from "../api/artist";

type Props = {
  artists: ?Array<Artist>,
  isLoading: boolean
};

const ArtistList = ({ artists, isLoading }: Props) => (
  <main>
    <Paper>
      {isLoading ? <Typography>Loading...</Typography> : null}
      {!(isLoading || (artists && artists.length)) ? (
        <Typography>No artists</Typography>
      ) : null}
      <List>
        {artists &&
          artists.map(artist => (
            <ListItem key={artist.id} button>
              <ListItemText primary={artist.name} />
            </ListItem>
          ))}
      </List>
    </Paper>
  </main>
);

export default ArtistList;
