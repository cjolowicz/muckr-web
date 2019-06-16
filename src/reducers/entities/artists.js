// @flow
import {
  FETCH_ARTISTS_SUCCESS,
  CREATE_ARTIST_SUCCESS,
  REMOVE_ARTIST_SUCCESS,
  UPDATE_ARTIST_SUCCESS
} from "../../actions/artist";
import type { Action } from "../../actions";
import type { Artist } from "../../api/artist";
import { addById, indexById, removeById } from "../../utils";

export type State = { [number]: Artist };

export const initialState: State = {};

export default function artists(state: State = initialState, action: Action) {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return indexById(action.artists);

    case CREATE_ARTIST_SUCCESS:
      return addById(state, action.artist);

    case REMOVE_ARTIST_SUCCESS:
      return removeById(state, action.id);

    case UPDATE_ARTIST_SUCCESS:
      return addById(state, action.artist);

    default:
      return state;
  }
}
