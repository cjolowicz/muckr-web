// @flow
import React from "react";

import Layout from "../layouts/Layout";
import FetchingArtistList from "../artist/FetchingArtistList";
import ArtistDialog from "../artist/ArtistDialog";
import ArtistButton from "../artist/ArtistButton";

const ArtistsPage = () => (
  <Layout>
    <FetchingArtistList />
    <ArtistButton />
    <ArtistDialog />
  </Layout>
);

export default ArtistsPage;
