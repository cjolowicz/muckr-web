// @flow
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { Cookies, CookiesProvider } from "react-cookie";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

import App from "../App";
import rootReducer from "../../reducers";
import { TOKEN } from "../../test/fixtures";
import * as routes from "../../routes";

const cookies = new Cookies();

const mountAppWithRoute = route => {
  const mockStore = configureStore([]);
  const initialState = rootReducer(undefined, {});
  const store = mockStore(initialState);
  const wrapper = mount(
    <MemoryRouter
      initialEntries={[
        {
          pathname: route,
          key: "test"
        }
      ]}
    >
      <CookiesProvider cookies={cookies}>
        <Provider store={store}>
          <App navigationOpen={false} closeNavigation={() => {}} />
        </Provider>
      </CookiesProvider>
    </MemoryRouter>
  );

  return wrapper.find(App);
};

describe("App", () => {
  beforeEach(() => {
    cookies.remove("token");
  });

  it("renders Index", () => {
    const wrapper = mountAppWithRoute(routes.INDEX);
    expect(wrapper).toContainMatchingElement("Index");
  });

  it("renders SignInBase", () => {
    const wrapper = mountAppWithRoute(routes.SIGNIN);
    expect(wrapper).toContainMatchingElement("SignInBase");
  });

  it("renders Artists", () => {
    cookies.set("token", TOKEN);
    const wrapper = mountAppWithRoute(routes.ARTISTS);
    expect(wrapper).toContainMatchingElement("Artists");
  });
});
