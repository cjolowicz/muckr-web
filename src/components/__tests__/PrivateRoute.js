// @flow
import * as React from "react";
import { Switch } from "react-router-dom";

import { PrivateRoute } from "../PrivateRoute";
import * as routes from "../../routes";
import render from "../../utils/test/render";
import { TOKEN } from "../../utils/test/fixtures";

const renderPrivateRoute = ({ token }) => {
  const Component = () => <div>Lorem Ipsum Dolor</div>;
  return render(
    <Switch>
      <PrivateRoute path="/private" component={Component} token={token} />
    </Switch>,
    { route: "/private" }
  );
};

describe("PrivateRoute", () => {
  describe("without token", () => {
    it("does not render component", () => {
      const { queryByText } = renderPrivateRoute({ token: null });
      expect(queryByText("Lorem Ipsum Dolor")).toBeNull();
    });

    it("redirects to the sign in route", async () => {
      const { history } = renderPrivateRoute({ token: null });
      expect(history.location.pathname).toEqual(routes.SIGNIN);
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
