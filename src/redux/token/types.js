// @flow
import * as constants from "./constants";
import * as api from "../../api/types";

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
    error: api.Error
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

export type State = ?string;
