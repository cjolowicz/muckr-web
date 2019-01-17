// @flow
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import { App, AppWithoutRouter } from "../App";
import { TOKEN } from "../../test/fixtures";
import * as routes from "../../routes";

describe("App", () => {
  it("renders Index", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toContainMatchingElement("Index");
  });

  it("renders Artists", () => {
    localStorage.setItem("token", TOKEN);

    const wrapper = mount(
      <MemoryRouter
        initialEntries={[
          {
            pathname: routes.ARTISTS,
            key: "test"
          }
        ]}
      >
        <AppWithoutRouter />
      </MemoryRouter>
    );

    expect(wrapper).toContainMatchingElement("Artists");
  });
});
