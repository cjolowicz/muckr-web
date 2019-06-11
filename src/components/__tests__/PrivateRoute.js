// @flow
import * as React from "react";
import { Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";

import PrivateRoute from "../PrivateRoute";
import { TOKEN } from "../../test/fixtures";

describe("PrivateRoute", () => {
  const renderPrivateRoute = props => {
    const Component = () => <div>Lorem Ipsum Dolor</div>;
    const history = createMemoryHistory({ initialEntries: ["/private"] });
    const result = render(
      <Router history={history}>
        <Switch>
          <PrivateRoute path="/private" component={Component} {...props} />
        </Switch>
      </Router>
    );
    return { ...result, history };
  };

  describe("without token", () => {
    it("does not render component", () => {
      const { queryByText } = renderPrivateRoute({ token: null });
      expect(queryByText("Lorem Ipsum Dolor")).toBeNull();
    });

    it("redirects to /login", async () => {
      const { history } = renderPrivateRoute({ token: null });
      expect(history.location.pathname).toEqual("/login");
    });
  });

  describe("with token", () => {
    it("renders component", () => {
      const { queryByText } = renderPrivateRoute({ token: TOKEN });
      expect(queryByText("Lorem Ipsum Dolor")).not.toBeNull();
    });

    it("does not redirect", () => {
      const { history } = renderPrivateRoute({ token: TOKEN });
      expect(history.location.pathname).toEqual("/private");
    });
  });
});
