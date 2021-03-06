// @flow
import { CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "./constants";
import type { Action } from "../types";

const user = (state: ?string = null, action: Action) => {
  switch (action.type) {
    case CREATE_USER_SUCCESS:
      return action.payload.user.username;
    case CREATE_USER_FAILURE:
      return null;
    default:
      return state;
  }
};

export default user;
