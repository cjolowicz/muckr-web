// @flow
import * as React from "react";
import { Redirect } from "react-router-dom";

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

export function withAuth(
  Component: React.ComponentType<{ token: string }>
): React.ComponentType<{}> {
  const WithAuth = () => {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Redirect to="/login" />;
    }

    return <Component token={token} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(Component)})`;

  return WithAuth;
}
