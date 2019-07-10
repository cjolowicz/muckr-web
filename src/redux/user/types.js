// @flow
import * as constants from "./constants";
import * as api from "../../api/types";

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
    error: api.Error
  }
};

export type Action =
  | CreateUserRequestAction
  | CreateUserSuccessAction
  | CreateUserFailureAction;

export type State = {
  user: ?string,
  error: ?api.Error
};
