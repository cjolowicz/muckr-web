// @flow
import React from 'react';

import { withAuth } from './Auth';
import { ArtistList } from './ArtistList';
import { API_USER, API_PASSWORD } from '../../constants';

const ArtistListWithAuth = withAuth(ArtistList);

export function App() {
  return <ArtistListWithAuth username={API_USER} password={API_PASSWORD} />;
}
