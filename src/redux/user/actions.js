// @flow
import * as constants from "./constants";
import * as types from "./types";
import * as api from "../../api/types";

export const createUserRequest = (
  username: string,
  password: string
): types.CreateUserRequestAction => ({
  type: constants.CREATE_USER_REQUEST,
  payload: { username, password }
});

export const createUserSuccess = (
  user: api.User
): types.CreateUserSuccessAction => ({
  type: constants.CREATE_USER_SUCCESS,
  payload: { user }
});

export const createUserFailure = (
  error: api.Error
): types.CreateUserFailureAction => ({
  type: constants.CREATE_USER_FAILURE,
  payload: { error }
});
