// @flow
import type { Dispatch } from "redux";

import * as user from "../services/user";

export const FETCH_TOKEN_REQUEST = "FETCH_TOKEN_REQUEST";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE";

export const fetchTokenRequest = (username: string, password: string) => ({
  type: FETCH_TOKEN_REQUEST,
  username,
  password
});

export const fetchTokenSuccess = (token: string) => ({
  type: FETCH_TOKEN_SUCCESS,
  token
});

export const fetchTokenFailure = (error: user.$FetchError) => ({
  type: FETCH_TOKEN_FAILURE,
  error
});

export const fetchToken = (username: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(fetchTokenRequest(username, password));

  return user
    .fetchToken(username, password)
    .then(
      token => dispatch(fetchTokenSuccess(token)),
      error => dispatch(fetchTokenFailure(error))
    );
};
