// @flow
import * as types from "./types";
import {
  FETCH_ARTISTS_SUCCESS,
  CREATE_ARTIST_SUCCESS,
  REMOVE_ARTIST_SUCCESS,
  UPDATE_ARTIST_SUCCESS
} from "../../artist/constants";
import type { Action } from "../../types";
import { addById, indexById, removeById } from "../../../utils";

export const initialState: types.State = {};

export default function artists(
  state: types.State = initialState,
  action: Action
) {
  switch (action.type) {
    case FETCH_ARTISTS_SUCCESS:
      return indexById(action.payload.artists);

    case CREATE_ARTIST_SUCCESS:
      return addById(state, action.payload.artist);

    case REMOVE_ARTIST_SUCCESS:
      return removeById(state, action.payload.id);

    case UPDATE_ARTIST_SUCCESS:
      return addById(state, action.payload.artist);

    default:
      return state;
  }
}
