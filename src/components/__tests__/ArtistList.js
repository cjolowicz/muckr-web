// @flow
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount } from "enzyme";

import ArtistList from "../ArtistList";
import rootReducer from "../../reducers";
import { ARTISTS } from "../../test/fixtures";

const mockStore = configureStore([]);
const state = rootReducer(undefined, {});
const store = mockStore(state);

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", async () => {
      const wrapper = mount(
        <Provider store={store}>
          <ArtistList artists={ARTISTS} isLoading={false} />
        </Provider>
      );

      expect(wrapper.text()).toEqual(expect.stringContaining(ARTISTS[0].name));
    });

    it("renders message while loading", async () => {
      const wrapper = mount(
        <Provider store={store}>
          <ArtistList artists={null} isLoading />
        </Provider>
      );
      expect(wrapper.find("p")).toHaveText("Loading...");
    });

    it("renders message if no artists", async () => {
      const wrapper = mount(
        <Provider store={store}>
          <ArtistList artists={null} isLoading={false} />
        </Provider>
      );
      expect(wrapper.find("p")).toHaveText("No artists");
    });
  });
});
