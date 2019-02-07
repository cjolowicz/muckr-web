// @flow
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Cookies, CookiesProvider } from "react-cookie";
import { mount } from "enzyme";

import { App } from "../App";
import { TOKEN } from "../../test/fixtures";
import * as routes from "../../routes";

const cookies = new Cookies();

const mountAppWithRoute = route =>
  mount(
    <MemoryRouter
      initialEntries={[
        {
          pathname: route,
          key: "test"
        }
      ]}
    >
      <CookiesProvider cookies={cookies}>
        <App />
      </CookiesProvider>
    </MemoryRouter>
  );

describe("App", () => {
  beforeEach(() => {
    cookies.remove("token");
  });

  it("renders Index", () => {
    const wrapper = mountAppWithRoute(routes.INDEX);
    expect(wrapper).toContainMatchingElement("Index");
  });

  it("renders Login", () => {
    const wrapper = mountAppWithRoute(routes.LOGIN);
    expect(wrapper).toContainMatchingElement("Login");
  });

  it("renders Artists", () => {
    cookies.set("token", TOKEN);
    const wrapper = mountAppWithRoute(routes.ARTISTS);
    expect(wrapper).toContainMatchingElement("Artists");
  });
});
