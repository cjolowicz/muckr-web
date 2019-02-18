// @flow
import React from "react";

import ArtistList from "./ArtistList";
import type { Artist } from "../services/artist";

type Props = {
  artists: ?Array<Artist>,
  error: ?Error,
  isLoading: boolean,
  token: ?string,
  fetchArtists: Function
};

type State = {
  messageOpen: boolean,
  message: ?string
};

export default class FetchingArtistList extends React.Component<Props, State> {
  state = { messageOpen: false, message: null };

  componentDidMount() {
    const { error } = this.props;

    this.handleError(error);
    this.fetchData();
  }

  componentDidUpdate({ token: previousToken, error: previousError }: Props) {
    const { token, error } = this.props;

    if (error !== previousError) {
      this.handleError(error);
    }

    if (token !== previousToken) {
      this.fetchData();
    }
  }

  handleError = (error: ?Error) => {
    const messageOpen = !!error;
    const message = error ? error.message : null;
    this.setState({ messageOpen, message });
  };

  fetchData() {
    const { fetchArtists, token } = this.props;

    if (token) {
      fetchArtists(token);
    }
  }

  render() {
    return (
      <ArtistList
        {...this.props}
        {...this.state}
        onMessageClose={this.handleError}
      />
    );
  }
}
