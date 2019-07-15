// @flow
import React from "react";

import Layout from "../layouts/Layout";
import FetchingArtistList from "../artist/FetchingArtistList";
import ArtistDialog from "../artist/ArtistDialog";

const ArtistsPage = () => (
  <Layout>
    <FetchingArtistList />
    <ArtistDialog />
  </Layout>
);

export default ArtistsPage;
