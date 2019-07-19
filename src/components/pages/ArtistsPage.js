// @flow
import React from "react";

import Layout from "../layouts/Layout";
import ArtistList from "../artist/ArtistList";
import ArtistDialog from "../artist/ArtistDialog";
import ArtistButton from "../artist/ArtistButton";

const ArtistsPage = () => (
  <Layout>
    <ArtistList />
    <ArtistButton />
    <ArtistDialog />
  </Layout>
);

export default ArtistsPage;
