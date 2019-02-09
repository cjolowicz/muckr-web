// @flow
import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";

import { Message } from "./Message";
import { fetchArtists } from "../services/artist";

type Props = {
  token: string
};

type Artist = {
  id: number,
  name: string
};

type State = {
  artists: Array<Artist>,
  error: ?Error,
  isLoading: boolean
};

export class ArtistList extends React.Component<Props, State> {
  state = {
    artists: [],
    error: null,
    isLoading: false
  };

  async componentDidMount() {
    this.setState({ isLoading: true });

    const { token } = this.props;

    try {
      const artists = await fetchArtists(token);
      this.setState({ artists, isLoading: false });
    } catch (error) {
      this.setState({ error, isLoading: false });
    }
  }

  render() {
    const { artists, error, isLoading } = this.state;

    if (error) {
      return <Message message={error.message} />;
    }

    if (isLoading) {
      return <Typography>Loading...</Typography>;
    }

    if (!artists.length) {
      return <Typography>No artists</Typography>;
    }

    return (
      <List>
        {artists.map(artist => (
          <ListItem key={artist.id} button>
            <ListItemText primary={artist.name} />
          </ListItem>
        ))}
      </List>
    );
  }
}
