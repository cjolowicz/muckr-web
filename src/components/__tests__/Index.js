// @flow
import * as React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

import Index from "../Index";
import SignUp from "../../containers/SignUp";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";
import { TOKEN } from "../../test/fixtures";

describe("Index", () => {
  const mockStore = configureStore([]);
  const state = rootReducer(undefined, noop());
  const store = mockStore(state);

  describe("with token", () => {
    it("does not render sign up form", () => {
      const wrapper = mount(
        <MemoryRouter initialEntries={["/"]}>
          <Provider store={store}>
            <Index token={TOKEN} />
          </Provider>
        </MemoryRouter>
      );
      expect(wrapper.find(SignUp)).toHaveLength(0);
    });
  });
});
