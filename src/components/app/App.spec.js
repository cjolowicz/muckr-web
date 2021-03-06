// @flow
import React from "react";

import App from "./App";
import render from "../../utils/test/render";
import { TOKEN, ARTIST, ARTISTS } from "../../utils/test/fixtures";
import * as routes from "../../routes";
import { fetchTokenSuccess } from "../../redux/token/actions";
import { fetchArtistsSuccess } from "../../redux/artist/actions";

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
