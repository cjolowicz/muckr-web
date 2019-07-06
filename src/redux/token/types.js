// @flow
import * as constants from "./constants";
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

export type Action =
  | FetchTokenRequestAction
  | FetchTokenSuccessAction
  | FetchTokenFailureAction
  | ClearTokenAction;

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (Action | ThunkAction) => any;
