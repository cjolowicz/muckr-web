// @flow
import * as constants from "./constants";
import * as api from "../../api/token";
import type { FetchError } from "../../api/error";

export type FetchTokenRequestAction = {
  type: typeof constants.FETCH_TOKEN_REQUEST,
  payload: {
    username: string,
    password: string
  }
};

export type FetchTokenSuccessAction = {
  type: typeof constants.FETCH_TOKEN_SUCCESS,
  payload: {
    token: string
  }
};

export type FetchTokenFailureAction = {
  type: typeof constants.FETCH_TOKEN_FAILURE,
  payload: {
    error: FetchError
  }
};

export type ClearTokenAction = {
  type: typeof constants.CLEAR_TOKEN,
  payload: {}
};

export type TokenAction =
  | FetchTokenRequestAction
  | FetchTokenSuccessAction
  | FetchTokenFailureAction
  | ClearTokenAction;

export const fetchTokenRequest = (
  username: string,
  password: string
): FetchTokenRequestAction => ({
  type: constants.FETCH_TOKEN_REQUEST,
  payload: { username, password }
});

export const fetchTokenSuccess = (token: string): FetchTokenSuccessAction => ({
  type: constants.FETCH_TOKEN_SUCCESS,
  payload: { token }
});

export const fetchTokenFailure = (
  error: FetchError
): FetchTokenFailureAction => ({
  type: constants.FETCH_TOKEN_FAILURE,
  payload: { error }
});

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (TokenAction | ThunkAction) => any;

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

export const clearToken = (): ClearTokenAction => ({
  type: constants.CLEAR_TOKEN,
  payload: {}
});
