// @flow
import * as api from "../api/token";
import type { FetchError } from "../api/error";

export const FETCH_TOKEN_REQUEST = "FETCH_TOKEN_REQUEST";
export const FETCH_TOKEN_SUCCESS = "FETCH_TOKEN_SUCCESS";
export const FETCH_TOKEN_FAILURE = "FETCH_TOKEN_FAILURE";

export type FetchTokenRequestAction = {
  type: typeof FETCH_TOKEN_REQUEST,
  username: string,
  password: string
};

export type FetchTokenSuccessAction = {
  type: typeof FETCH_TOKEN_SUCCESS,
  token: string
};

export type FetchTokenFailureAction = {
  type: typeof FETCH_TOKEN_FAILURE,
  error: FetchError
};

export type FetchTokenAction =
  | FetchTokenRequestAction
  | FetchTokenSuccessAction
  | FetchTokenFailureAction;

export const fetchTokenRequest = (
  username: string,
  password: string
): FetchTokenRequestAction => ({
  type: FETCH_TOKEN_REQUEST,
  username,
  password
});

export const fetchTokenSuccess = (token: string): FetchTokenSuccessAction => ({
  type: FETCH_TOKEN_SUCCESS,
  token
});

export const fetchTokenFailure = (
  error: FetchError
): FetchTokenFailureAction => ({
  type: FETCH_TOKEN_FAILURE,
  error
});

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (FetchTokenAction | ThunkAction) => any;

export const fetchToken = (username: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(fetchTokenRequest(username, password));

  return api
    .fetchToken(username, password)
    .then(
      token => dispatch(fetchTokenSuccess(token)),
      error => dispatch(fetchTokenFailure(error))
    );
};
