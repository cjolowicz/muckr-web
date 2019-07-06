// @flow
import * as types from "./types";
import * as actions from "./actions";
import * as api from "../../api/token";

// eslint-disable-next-line import/prefer-default-export
export const fetchToken = (username: string, password: string) => (
  dispatch: types.Dispatch
) => {
  dispatch(actions.fetchTokenRequest(username, password));

  return api
    .fetchToken(username, password)
    .then(
      token => dispatch(actions.fetchTokenSuccess(token)),
      error => dispatch(actions.fetchTokenFailure(error))
    );
};
