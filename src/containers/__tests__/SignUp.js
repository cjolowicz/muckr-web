// @flow
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ThemeProvider } from "@material-ui/styles";
import { render } from "@testing-library/react";

import SignUp from "../SignUp";
import rootReducer from "../../reducers";
import { noop } from "../../actions/noop";
import theme from "../../theme";

describe("SignUp", () => {
  it("renders", () => {
    const mockStore = configureStore([thunk]);
    const state = rootReducer(undefined, noop());
    const store = mockStore(state);
    const routerEntry = { pathname: "/join", key: "test" };
    const { queryByText } = render(
      <MemoryRouter initialEntries={[routerEntry]}>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <SignUp />
          </Provider>
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(queryByText("Sign up for Muckr")).not.toBeNull();
  });
});
