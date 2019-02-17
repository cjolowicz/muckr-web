// @flow
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

import App from "../App";
import rootReducer from "../../reducers";
import { TOKEN } from "../../test/fixtures";
import * as routes from "../../routes";
import { fetchTokenSuccess } from "../../actions/fetchToken";

const mountAppWithRoute = (route, initialAction = {}) => {
  const mockStore = configureStore([]);
  const state = rootReducer(undefined, initialAction);
  const store = mockStore(state);
  const wrapper = mount(
    <MemoryRouter
      initialEntries={[
        {
          pathname: route,
          key: "test"
        }
      ]}
    >
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );

  return wrapper.find(App);
};

describe("App", () => {
  it("renders Index", () => {
    const wrapper = mountAppWithRoute(routes.INDEX);
    expect(wrapper).toContainMatchingElement("Index");
  });

  it("renders SignInBase", () => {
    const wrapper = mountAppWithRoute(routes.SIGNIN);
    expect(wrapper).toContainMatchingElement("SignInBase");
  });

  it("renders ArtistList", () => {
    const wrapper = mountAppWithRoute(routes.ARTISTS, fetchTokenSuccess(TOKEN));
    expect(wrapper).toContainMatchingElement("ArtistList");
  });
});
