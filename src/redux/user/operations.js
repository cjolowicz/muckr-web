// @flow
import * as actions from "./actions";
import * as types from "./types";
import * as api from "../../api/user";

// eslint-disable-next-line import/prefer-default-export
export const createUser = (username: string, password: string) => (
  dispatch: types.Dispatch
) => {
  dispatch(actions.createUserRequest(username, password));

  return api
    .createUser(username, password)
    .then(
      user => dispatch(actions.createUserSuccess(user)),
      error => dispatch(actions.createUserFailure(error))
    );
};
