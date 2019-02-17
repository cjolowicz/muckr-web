// @flow
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Message from "./Message";
import type { Artist } from "../services/artist";

export type Props = {
  artists: ?Array<Artist>,
  error: ?Error,
  isLoading: boolean
};

const ArtistList = ({ artists, error, isLoading }: Props) => (
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
    {error ? <Message message={error.message} /> : null}
  </main>
);

export default ArtistList;
