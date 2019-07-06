// @flow
import React from "react";

import App from "../App";
import render from "../../test/render";
import { TOKEN, ARTIST, ARTISTS } from "../../test/fixtures";
import * as routes from "../../routes";
import { fetchTokenSuccess } from "../../redux/actions/token";
import { fetchArtistsSuccess } from "../../redux/actions/artist";

describe("App", () => {
  it("renders welcome page", () => {
    const { queryByText } = render(<App />, {
      route: routes.INDEX,
      actions: [fetchTokenSuccess(TOKEN)]
    });
    expect(queryByText("Welcome")).not.toBeNull();
  });

  it("renders sign in box", () => {
    const { queryByText } = render(<App />, { route: routes.SIGNIN });
    expect(queryByText("Sign in to Muckr")).not.toBeNull();
  });

  it("renders artist list", () => {
    const { name } = ARTIST;
    const { queryByText } = render(<App />, {
      route: routes.ARTISTS,
      actions: [fetchTokenSuccess(TOKEN), fetchArtistsSuccess(ARTISTS)]
    });
    expect(queryByText(name)).not.toBeNull();
  });
});
