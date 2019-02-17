// @flow
import React from "react";

import ArtistList from "./ArtistList";
import type { Props as InnerProps } from "./ArtistList";

type Props = InnerProps & {
  token: ?string,
  fetchArtists: Function
};

export default class FetchingArtistList extends React.Component<Props> {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate({ token: previousToken }: Props) {
    const { token } = this.props;

    if (token !== previousToken) {
      this.fetchData();
    }
  }

  fetchData() {
    const { fetchArtists, token } = this.props;

    if (token) {
      fetchArtists(token);
    }
  }

  render() {
    return <ArtistList {...this.props} />;
  }
}
