// @flow
import React from "react";

import { fetchArtists } from "../artists";

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
  constructor(props: Props) {
    super(props);

    this.state = {
      artists: [],
      error: null,
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { token } = this.props;

    fetchArtists(token)
      .then(artists =>
        this.setState({
          artists,
          isLoading: false
        })
      )
      .catch(error =>
        this.setState({
          error,
          isLoading: false
        })
      );
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
