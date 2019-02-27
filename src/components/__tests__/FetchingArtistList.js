// @flow
import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN } from "../../test/fixtures";

describe("FetchingArtistList", () => {
  describe("without token", () => {
    it("does not fetch artists", () => {
      const fetchArtists = jest.fn();
      act(() => {
        mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
          />
        );
      });
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      act(() => {
        mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={TOKEN}
            fetchArtists={fetchArtists}
          />
        );
      });
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on token update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      act(() => {
        const wrapper = mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
          />
        );
        wrapper.setProps({ token: TOKEN });
      });
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on no-op update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      act(() => {
        const wrapper = mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
          />
        );
        wrapper.setProps({});
      });
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });
});
