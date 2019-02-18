// @flow
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter, Switch, Route } from "react-router-dom";
import configureStore from "redux-mock-store";
import { mount, shallow } from "enzyme";

import { PureSignIn as SignIn } from "../SignIn";
import rootReducer from "../../reducers";
import { getInstance } from "../../test/utils";
import { TOKEN } from "../../test/fixtures";
import { unsafeCast } from "../../utils";

const mockStore = configureStore([]);
const state = rootReducer(undefined, {});
const store = mockStore(state);

const mockClasses = {
  main: "main",
  paper: "paper",
  form: "form",
  submit: "submit"
};

const mockEvent = <T>(stub): SyntheticEvent<T> =>
  unsafeCast<SyntheticEvent<T>>(stub);

describe("SignIn", () => {
  describe("initially", () => {
    it("renders main", () => {
      const wrapper = mount(
        <Provider store={store}>
          <SignIn
            nextRoute="/"
            classes={mockClasses}
            onSubmit={jest.fn()}
            token={null}
          />
        </Provider>
      );
      expect(wrapper).toContainMatchingElement("main");
    });
  });

  describe("handleChange", () => {
    it("updates state", () => {
      const wrapper = shallow(
        <SignIn
          nextRoute="/"
          classes={mockClasses}
          onSubmit={jest.fn()}
          token={null}
        />
      );

      const component = getInstance<SignIn>(wrapper);

      expect(wrapper).toHaveState({ username: "" });

      component.handleChange(
        mockEvent<HTMLInputElement>({
          currentTarget: {
            name: "username",
            value: "john"
          }
        })
      );

      expect(wrapper).toHaveState({ username: "john" });
    });
  });

  describe("handleSubmit", () => {
    it("invokes onSubmit", async () => {
      const onSubmit = jest.fn();

      const wrapper = shallow(
        <SignIn
          nextRoute="/"
          classes={mockClasses}
          onSubmit={onSubmit}
          token={null}
        />
      );
      const component = getInstance<SignIn>(wrapper);

      component.handleChange(
        mockEvent<HTMLInputElement>({
          currentTarget: {
            name: "username",
            value: "john"
          }
        })
      );

      component.handleChange(
        mockEvent<HTMLInputElement>({
          currentTarget: {
            name: "password",
            value: "secret"
          }
        })
      );

      component.handleSubmit(
        mockEvent<HTMLButtonElement>({
          preventDefault: jest.fn()
        })
      );

      expect(onSubmit).toHaveBeenLastCalledWith("john", "secret");
    });
  });

  describe("on success", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/login"]}>
          <Switch>
            <Route path="/login">
              <SignIn
                nextRoute="/"
                classes={mockClasses}
                onSubmit={jest.fn()}
                token={TOKEN}
              />
            </Route>
          </Switch>
        </MemoryRouter>
      </Provider>
    );

    it("redirects", async () => {
      const history = wrapper.find("Router").prop("history");
      expect(history.location.pathname).toEqual("/");
    });
  });
});
