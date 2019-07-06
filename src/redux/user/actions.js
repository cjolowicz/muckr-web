// @flow
import * as constants from "./constants";
import * as types from "./types";
import * as api from "../../api/user";
import type { FetchError } from "../../api/error";

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
  error: FetchError
): types.CreateUserFailureAction => ({
  type: constants.CREATE_USER_FAILURE,
  payload: { error }
});

export const createUser = (username: string, password: string) => (
  dispatch: types.Dispatch
) => {
  dispatch(createUserRequest(username, password));

  return api
    .createUser(username, password)
    .then(
      user => dispatch(createUserSuccess(user)),
      error => dispatch(createUserFailure(error))
    );
};
