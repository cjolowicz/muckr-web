// @flow
import * as React from "react";
import { Redirect } from "react-router-dom";

import * as routes from "../routes";

export function getDisplayName<T>(Component: React.AbstractComponent<T>) {
  return Component.displayName || Component.name || "Component";
}

export function withAuth(
  Component: React.ComponentType<{ token: string }>
): React.ComponentType<{}> {
  const WithAuth = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Redirect to={routes.LOGIN} />;
    }

    return <Component token={token} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(Component)})`;

  return WithAuth;
}
