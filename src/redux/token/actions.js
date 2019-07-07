// @flow
import * as constants from "./constants";
import * as types from "./types";
import * as api from "../../api/types";

export const fetchTokenRequest = (
  username: string,
  password: string
): types.FetchTokenRequestAction => ({
  type: constants.FETCH_TOKEN_REQUEST,
  payload: { username, password }
});

export const fetchTokenSuccess = (
  token: string
): types.FetchTokenSuccessAction => ({
  type: constants.FETCH_TOKEN_SUCCESS,
  payload: { token }
});

export const fetchTokenFailure = (
  error: api.FetchError
): types.FetchTokenFailureAction => ({
  type: constants.FETCH_TOKEN_FAILURE,
  payload: { error }
});

export const clearToken = (): types.ClearTokenAction => ({
  type: constants.CLEAR_TOKEN,
  payload: {}
});
