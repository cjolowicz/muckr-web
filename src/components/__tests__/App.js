// @flow
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import { App } from "../App";
import { TOKEN } from "../../test/fixtures";
import * as routes from "../../routes";

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
      <App />
    </MemoryRouter>
  );

describe("App", () => {
  it("renders Index", () => {
    const wrapper = mountAppWithRoute(routes.INDEX);
    expect(wrapper).toContainMatchingElement("Index");
  });

  it("renders Artists", () => {
    localStorage.setItem("token", TOKEN);
    const wrapper = mountAppWithRoute(routes.ARTISTS);
    expect(wrapper).toContainMatchingElement("Artists");
  });
});
