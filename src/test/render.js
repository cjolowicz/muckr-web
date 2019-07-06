// @flow
import * as React from "react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { render } from "@testing-library/react";

import { noop } from "../redux/noop/actions";
import * as routes from "../routes";
import rootReducer from "../redux/reducers";
import theme from "../theme";
import type { Action } from "../redux/actions";

type RenderConfig = {
  actions?: Array<Action>,
  route?: string
};

const render$ = (
  component: React.Element<*>,
  { actions, route }: RenderConfig = {}
) => {
  const actions$ = actions && actions.length ? actions : [noop()];

  const state = actions$.reduce(rootReducer, undefined);
  const mockStore = configureStore([thunk]);
  const store = mockStore(state);

  const history = createMemoryHistory({
    initialEntries: [{ pathname: route || routes.INDEX, key: "test" }]
  });

  const utils = render(
    <Router history={history}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>{component}</Provider>
      </ThemeProvider>
    </Router>
  );

  return { ...utils, history };
};

export default render$;
