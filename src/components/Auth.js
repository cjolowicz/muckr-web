// @flow
import * as React from "react";
import { Redirect } from "react-router-dom";
import { withCookies, Cookies } from "react-cookie";

import * as routes from "../routes";

export function getDisplayName<T>(Component: React.AbstractComponent<T>) {
  return Component.displayName || Component.name || "Component";
}

type Props = { cookies: Cookies };

export function withAuth(
  Component: React.ComponentType<{ token: string }>
): React.ComponentType<{}> {
  const WithAuth = ({ cookies }: Props) => {
    const token = cookies.get("token");

    if (!token) {
      return <Redirect to={routes.LOGIN} />;
    }

    return <Component token={token} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(Component)})`;

  return withCookies(WithAuth);
}
