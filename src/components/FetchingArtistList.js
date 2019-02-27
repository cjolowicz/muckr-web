// @flow
import React, { useEffect } from "react";

import ArtistList from "./ArtistList";
import type { Artist } from "../api/artist";

type Props = {
  artists: ?Array<Artist>,
  isLoading: boolean,
  token: ?string,
  fetchArtists: Function
};

const FetchingArtistList = (props: Props) => {
  const { fetchArtists, token } = props;

  useEffect(() => {
    if (token) {
      fetchArtists(token);
    }
  }, [token, fetchArtists]);

  return <ArtistList {...props} />;
};

export default FetchingArtistList;
