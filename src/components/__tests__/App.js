// @flow
import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import App from "../App";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";
import { TOKEN, ARTIST, ARTISTS } from "../../test/fixtures";
import * as routes from "../../routes";
import { fetchTokenSuccess } from "../../actions/token";
import { fetchArtistsSuccess } from "../../actions/artist";

const renderAppWithRoute = (route, actions = []) => {
  const state = (actions.length ? actions : [noop()]).reduce(
    rootReducer,
    undefined
  );
  const mockStore = configureStore([thunk]);
  const store = mockStore(state);
  const routerEntry = { pathname: route, key: "test" };

  return render(
    <MemoryRouter initialEntries={[routerEntry]}>
      <Provider store={store}>
        <App />
      </Provider>
    </MemoryRouter>
  );
};

describe("App", () => {
  it("renders welcome page", () => {
    const { queryByText } = renderAppWithRoute(routes.INDEX, [
      fetchTokenSuccess(TOKEN)
    ]);
    expect(queryByText("Welcome")).not.toBeNull();
  });

  it("renders sign in box", () => {
    const { queryByText } = renderAppWithRoute(routes.SIGNIN);
    expect(queryByText("Sign in to Muckr")).not.toBeNull();
  });

  it("renders artist list", () => {
    const { name } = ARTIST;
    const { queryByText } = renderAppWithRoute(routes.ARTISTS, [
      fetchTokenSuccess(TOKEN),
      fetchArtistsSuccess(ARTISTS)
    ]);
    expect(queryByText(name)).not.toBeNull();
  });
});
