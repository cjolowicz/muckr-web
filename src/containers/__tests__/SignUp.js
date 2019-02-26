// @flow
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mount } from "enzyme";

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
    const wrapper = mount(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/join",
            key: "test"
          }
        ]}
      >
        <Provider store={store}>
          <SignUp classes={classes} />
        </Provider>
      </MemoryRouter>
    );

    const component = wrapper.find(SignUp);
    expect(component).toHaveLength(1);
  });
});
