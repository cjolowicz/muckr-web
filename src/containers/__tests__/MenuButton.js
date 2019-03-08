// @flow
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import configureStore from "redux-mock-store";

import MenuButton from "../MenuButton";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";

describe("MenuButton", () => {
  it("renders", () => {
    const mockStore = configureStore([]);
    const state = rootReducer(undefined, noop());
    const store = mockStore(state);

    render(
      <Provider store={store}>
        <MenuButton />
      </Provider>
    );
  });
});
