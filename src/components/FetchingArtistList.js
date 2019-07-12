// @flow
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import ArtistList from "./artist/ArtistList";
import type { Props as BaseProps } from "./artist/ArtistList";
import {
  fetchArtists,
  createArtist,
  removeArtist
} from "../redux/artist/operations";
import { openCreateDialog, openUpdateDialog } from "../redux/dialog/actions";
import { artists, artistsPending, token } from "../redux/selectors";

type Props = BaseProps & {
  token: ?string,
  fetchArtists: Function
};

export const FetchingArtistList = (props: Props) => {
  // eslint-disable-next-line no-shadow
  const { fetchArtists, token } = props;

  useEffect(() => {
    if (token) {
      fetchArtists(token);
    }
  }, [token, fetchArtists]);

  return <ArtistList {...(props: BaseProps)} />;
};

export default connect(
  createStructuredSelector({
    artists,
    pending: artistsPending,
    token
  }),
  {
    fetchArtists,
    createArtist,
    removeArtist,
    openCreateDialog,
    openUpdateDialog
  }
)(FetchingArtistList);
