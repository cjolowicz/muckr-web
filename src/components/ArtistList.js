// @flow
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Message from "./Message";
import type { Artist } from "../services/artist";

type Props = {
  artists: ?Array<Artist>,
  isLoading: boolean,
  messageOpen: boolean,
  onMessageClose: Function,
  message: ?string
};

const ArtistList = ({
  artists,
  isLoading,
  messageOpen,
  onMessageClose,
  message
}: Props) => (
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
    <Message open={messageOpen} onClose={onMessageClose} message={message} />
  </main>
);

export default ArtistList;
