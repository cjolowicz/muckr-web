// @flow
import React from "react";

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
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!artists.length) {
      return <p>No artists</p>;
    }

    return (
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    );
  }
}
