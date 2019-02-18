// @flow
import React from "react";
import { mount } from "enzyme";

import FetchingArtistList from "../FetchingArtistList";
import { TOKEN } from "../../test/fixtures";

describe("FetchingArtistList", () => {
  describe("without token", () => {
    it("does not fetch artists", () => {
      const fetchArtists = jest.fn();
      mount(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          error={null}
          token={null}
          fetchArtists={fetchArtists}
        />
      );
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });

  describe("with token", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      mount(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          error={null}
          token={TOKEN}
          fetchArtists={fetchArtists}
        />
      );
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on token update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const wrapper = mount(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          error={null}
          token={null}
          fetchArtists={fetchArtists}
        />
      );
      wrapper.setProps({ token: TOKEN });
      expect(fetchArtists).toHaveBeenCalled();
    });
  });

  describe("on error update", () => {
    it("sets message", () => {
      const wrapper = mount(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          error={null}
          token={null}
          fetchArtists={jest.fn()}
        />
      );
      wrapper.setProps({ error: new Error("failure") });
      expect(wrapper).toHaveState({ message: "failure" });
    });
  });

  describe("on no-op update", () => {
    it("fetches artists", () => {
      const fetchArtists = jest.fn();
      const wrapper = mount(
        <FetchingArtistList
          artists={null}
          isLoading={false}
          error={null}
          token={null}
          fetchArtists={fetchArtists}
        />
      );
      wrapper.setProps({});
      expect(fetchArtists).not.toHaveBeenCalled();
    });
  });
});
