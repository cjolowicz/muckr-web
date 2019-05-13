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
      const createArtist = jest.fn();
      act(() => {
        mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
            createArtist={createArtist}
          />
        );
      });
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      act(() => {
        mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={TOKEN}
            fetchArtists={fetchArtists}
            createArtist={createArtist}
          />
        );
      });
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on token update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const createArtist = jest.fn();
      act(() => {
        const wrapper = mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
            createArtist={createArtist}
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
      const createArtist = jest.fn();
      act(() => {
        const wrapper = mount(
          <FetchingArtistList
            artists={null}
            isLoading={false}
            token={null}
            fetchArtists={fetchArtists}
            createArtist={createArtist}
          />
        );
        wrapper.setProps({});
      });
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });
});
