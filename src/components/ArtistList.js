// @flow
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

import type { Artist } from "../api/artist";
import CreateArtistDialog from "./CreateArtistDialog";

export type Props = {
  classes: Object,
  token: ?string,
  artists: ?Array<Artist>,
  isLoading: boolean,
  createArtist: Function
};

const ArtistList = ({
  classes,
  token,
  artists,
  isLoading,
  createArtist
}: Props) => (
  <>
    {isLoading ? <Typography>Loading...</Typography> : null}
    <List>
      {artists &&
        artists.map(artist => (
          <ListItem
            key={artist.id}
            button
            classes={{ container: classes.item }}
          >
            <ListItemText primary={artist.name} />
            <ListItemSecondaryAction>
              <IconButton
                aria-label="Delete"
                title="Delete"
                className={classes.delete}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
    <CreateArtistDialog token={token} createArtist={createArtist} />
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
