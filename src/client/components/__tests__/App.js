// @flow
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import { App, AppWithoutRouter } from "../App";
import { TOKEN } from "../../../test/fixtures";

describe("App", () => {
  it("renders Index", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find("Index")).toHaveLength(1);
  });

  it("renders Artists", () => {
    localStorage.setItem("token", TOKEN);

    const wrapper = mount(
      <MemoryRouter
        initialEntries={[
          {
            pathname: "/artists/",
            key: "test"
          }
        ]}
      >
        <AppWithoutRouter />
      </MemoryRouter>
    );

    expect(wrapper.find("Artists")).toHaveLength(1);
  });
});
