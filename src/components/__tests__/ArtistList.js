// @flow
import React from "react";
import { mount } from "enzyme";

import ArtistList from "../ArtistList";
import { ARTISTS } from "../../test/fixtures";

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", async () => {
      const wrapper = mount(
        <ArtistList artists={ARTISTS} isLoading={false} error={null} />
      );

      expect(wrapper.text()).toEqual(expect.stringContaining(ARTISTS[0].name));
    });

    it("renders message while loading", async () => {
      const wrapper = mount(
        <ArtistList artists={null} isLoading error={null} />
      );
      expect(wrapper.find("p")).toHaveText("Loading...");
    });

    it("renders message if no artists", async () => {
      const wrapper = mount(
        <ArtistList artists={null} isLoading={false} error={null} />
      );
      expect(wrapper.find("p")).toHaveText("No artists");
    });
  });

  describe("on error", () => {
    it("stores error", async () => {
      const error = new Error("fail");
      const wrapper = mount(
        <ArtistList artists={null} isLoading={false} error={error} />
      );
      expect(wrapper.text()).toEqual(expect.stringContaining(error.message));
    });
  });
});
