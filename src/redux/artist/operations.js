// @flow
import type { Dispatch } from "../types";
import * as api from "../../api/artist";
import * as actions from "./actions";

export const fetchArtists = (token: string) => (dispatch: Dispatch) => {
  dispatch(actions.fetchArtistsRequest(token));

  return api
    .fetchArtists(token)
    .then(
      artists => dispatch(actions.fetchArtistsSuccess(artists)),
      error => dispatch(actions.fetchArtistsFailure(error))
    );
};

export const createArtist = (token: string, name: string) => (
  dispatch: Dispatch
) => {
  dispatch(actions.createArtistRequest(token, name));

  return api
    .createArtist(token, name)
    .then(
      artist => dispatch(actions.createArtistSuccess(artist)),
      error => dispatch(actions.createArtistFailure(error))
    );
};

export const removeArtist = (token: string, id: number) => (
  dispatch: Dispatch
) => {
  dispatch(actions.removeArtistRequest(token, id));

  return api
    .removeArtist(token, id)
    .then(
      () => dispatch(actions.removeArtistSuccess(id)),
      error => dispatch(actions.removeArtistFailure(error))
    );
};

export const updateArtist = (token: string, artist: api.Artist) => (
  dispatch: Dispatch
) => {
  dispatch(actions.updateArtistRequest(token, artist));

  return api
    .updateArtist(token, artist)
    .then(
      () => dispatch(actions.updateArtistSuccess(artist)),
      error => dispatch(actions.updateArtistFailure(error))
    );
};
