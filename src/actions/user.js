// @flow
import * as api from "../api/user";
import type { FetchError } from "../api/error";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export type CreateUserRequestAction = {
  type: typeof CREATE_USER_REQUEST,
  payload: {
    username: string,
    password: string
  }
};

export type CreateUserSuccessAction = {
  type: typeof CREATE_USER_SUCCESS,
  payload: {
    user: api.User
  }
};

export type CreateUserFailureAction = {
  type: typeof CREATE_USER_FAILURE,
  payload: {
    error: FetchError
  }
};

export type UserAction =
  | CreateUserRequestAction
  | CreateUserSuccessAction
  | CreateUserFailureAction;

export const createUserRequest = (
  username: string,
  password: string
): CreateUserRequestAction => ({
  type: CREATE_USER_REQUEST,
  payload: { username, password }
});

export const createUserSuccess = (user: api.User): CreateUserSuccessAction => ({
  type: CREATE_USER_SUCCESS,
  payload: { user }
});

export const createUserFailure = (
  error: FetchError
): CreateUserFailureAction => ({
  type: CREATE_USER_FAILURE,
  payload: { error }
});

// eslint-disable-next-line no-use-before-define
type ThunkAction = Dispatch => any;
export type Dispatch = (UserAction | ThunkAction) => any;

export const createUser = (username: string, password: string) => (
  dispatch: Dispatch
) => {
  dispatch(createUserRequest(username, password));

  return api
    .createUser(username, password)
    .then(
      user => dispatch(createUserSuccess(user)),
      error => dispatch(createUserFailure(error))
    );
};
