// @flow
import React, { useEffect } from "react";

import ArtistList from "./ArtistList";
import type { Props as BaseProps } from "./ArtistList";

type Props = BaseProps & {
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

  return <ArtistList {...(props: BaseProps)} />;
};

export default FetchingArtistList;
