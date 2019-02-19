// @flow
import React from "react";
import { mount } from "enzyme";

import ArtistList from "../ArtistList";
import { ARTISTS } from "../../test/fixtures";

describe("ArtistList", () => {
  describe("on success", () => {
    it("renders artists", async () => {
      const wrapper = mount(<ArtistList artists={ARTISTS} isLoading={false} />);
      expect(wrapper.text()).toEqual(expect.stringContaining(ARTISTS[0].name));
    });

    it("renders message while loading", async () => {
      const wrapper = mount(<ArtistList artists={null} isLoading />);
      expect(wrapper.find("p")).toHaveText("Loading...");
    });

    it("renders message if no artists", async () => {
      const wrapper = mount(<ArtistList artists={null} isLoading={false} />);
      expect(wrapper.find("p")).toHaveText("No artists");
    });
  });
});
