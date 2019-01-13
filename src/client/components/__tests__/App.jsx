// @flow
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { mount } from "enzyme";

import { App, AppWithoutRouter } from "../App";

describe("App", () => {
  it("renders Index", () => {
    const wrapper = mount(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders Artists", () => {
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

    expect(wrapper).toMatchSnapshot();
  });
});
