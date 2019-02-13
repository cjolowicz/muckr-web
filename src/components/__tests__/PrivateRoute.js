// @flow
import * as React from "react";
import { MemoryRouter, Switch } from "react-router-dom";
import { mount } from "enzyme";

import PrivateRoute from "../PrivateRoute";
import { TOKEN } from "../../test/fixtures";

describe("PrivateRoute", () => {
  const Component = () => <div>Lorem Ipsum Dolor</div>;
  const mountPrivateRoute = props =>
    mount(
      <MemoryRouter initialEntries={["/private"]}>
        <Switch>
          <PrivateRoute path="/private" component={Component} {...props} />
        </Switch>
      </MemoryRouter>
    );

  let wrapper;

  describe("without token", () => {
    beforeEach(() => {
      wrapper = mountPrivateRoute({ token: null });
    });

    it("does not render component", () => {
      expect(wrapper.find(Component)).toHaveLength(0);
    });

    it("redirects to /login", () => {
      const history = wrapper.find("Router").prop("history");
      expect(history.location.pathname).toEqual("/login");
    });
  });

  describe("with token", () => {
    beforeEach(() => {
      wrapper = mountPrivateRoute({ token: TOKEN });
    });

    it("renders component", () => {
      expect(wrapper.find(Component)).toHaveLength(1);
    });

    it("does not redirect", () => {
      const history = wrapper.find("Router").prop("history");
      expect(history.location.pathname).toEqual("/private");
    });
  });
});
