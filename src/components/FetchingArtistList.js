// @flow
import React from "react";

import ArtistList from "./ArtistList";
import { fetchArtists } from "../services/artist";
import type { Props as State } from "./ArtistList";

type Props = {
  token: string
};

export default class FetchingArtistList extends React.Component<Props, State> {
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
    return <ArtistList {...this.state} />;
  }
}
