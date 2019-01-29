// @flow
import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../routes";

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to={routes.INDEX}>Home</Link>
      </li>
      <li>
        <Link to={routes.ARTISTS}>Artists</Link>
      </li>
    </ul>
  </nav>
);
