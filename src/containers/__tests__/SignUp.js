// @flow
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";

import SignUp from "../SignUp";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";

const classes = {
  main: "test",
  paper: "test",
  form: "test",
  submit: "test"
};

describe("SignUp", () => {
  it("renders", () => {
    const mockStore = configureStore([thunk]);
    const state = rootReducer(undefined, noop());
    const store = mockStore(state);
    const routerEntry = { pathname: "/join", key: "test" };
    const { queryByText } = render(
      <MemoryRouter initialEntries={[routerEntry]}>
        <Provider store={store}>
          <SignUp classes={classes} />
        </Provider>
      </MemoryRouter>
    );

    expect(queryByText("Sign up for Muckr")).not.toBeNull();
  });
});
