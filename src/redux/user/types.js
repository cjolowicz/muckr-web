// @flow
import * as constants from "./constants";
import * as api from "../../api/user";
import type { FetchError } from "../../api/error";

export type CreateUserRequestAction = {
  type: typeof constants.CREATE_USER_REQUEST,
  payload: {
    username: string,
    password: string
  }
};

export type CreateUserSuccessAction = {
  type: typeof constants.CREATE_USER_SUCCESS,
  payload: {
    user: api.User
  }
};

export type CreateUserFailureAction = {
  type: typeof constants.CREATE_USER_FAILURE,
  payload: {
    error: FetchError
  }
};

export type Action =
  | CreateUserRequestAction
  | CreateUserSuccessAction
  | CreateUserFailureAction;

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (Action | ThunkAction) => any;

export type State = {
  isCreating: boolean,
  user: ?string,
  error: ?FetchError
};