// @flow
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { mount, shallow } from "enzyme";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN } from "../../test/fixtures";
import rootReducer from "../../reducers";

const mockStore = configureStore([]);
const state = rootReducer(undefined, {});
const store = mockStore(state);

describe("FetchingArtistList", () => {
  describe("without token", () => {
    it("does not fetch artists", () => {
      const fetchArtists = jest.fn();
      mount(
        <Provider store={store}>
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
          />
        </Provider>
      );
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      mount(
        <Provider store={store}>
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={TOKEN}
            fetchArtists={fetchArtists}
          />
        </Provider>
      );
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on token update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const wrapper = shallow(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          token={null}
          fetchArtists={fetchArtists}
        />
      );
      wrapper.setProps({ token: TOKEN });
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on no-op update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const wrapper = shallow(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          token={null}
          fetchArtists={fetchArtists}
        />
      );
      wrapper.setProps({});
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });
});
