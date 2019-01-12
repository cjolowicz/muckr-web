// @flow
import React from "react";
import { mount } from "enzyme";

import { withAuth } from "../Auth";
import * as auth from "../../auth";
import { mock } from "../../../test/utils";
import { TOKEN } from "../../../test/fixtures";

export const Auth = withAuth((props: { token: string }) => (
  <p>Logged in: {props.token}</p>
));

describe("Auth", () => {
  describe("on success", () => {
    const promise = Promise.resolve(TOKEN);

    beforeAll(() => {
      jest.spyOn(auth, "fetchToken").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(auth.fetchToken).mockRestore();
    });

    it("stores token", () => {
      const wrapper = mount(<Auth username="john" password="secret" />);

      expect(wrapper.state().token).toBeNull();

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.state().token).toEqual(TOKEN);
      });
    });

    it("tracks progress", () => {
      const wrapper = mount(<Auth username="john" password="secret" />);

      expect(wrapper.state().isLoading).toBeTruthy();

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.state().isLoading).toBeFalsy();
      });
    });

    it("renders token", () => {
      const wrapper = mount(<Auth username="john" password="secret" />);

      expect(wrapper.find("p").text()).toEqual("Logging in...");

      return promise.then(() => {
        wrapper.update();
        expect(wrapper.find("p").text()).toEqual(`Logged in: ${TOKEN}`);
      });
    });
  });

  describe("on error", () => {
    const error = new Error("fail");
    const promise = Promise.reject(error);

    beforeAll(() => {
      jest.spyOn(auth, "fetchToken").mockReturnValue(promise);
    });

    afterAll(() => {
      mock(auth.fetchToken).mockRestore();
    });

    it("stores error", () => {
      expect.assertions(2);

      const wrapper = mount(<Auth username="john" password="secret" />);

      expect(wrapper.state().error).toBeNull();

      return promise.then().catch(() => {
        wrapper.update();
        expect(wrapper.state().error).toBe(error);
      });
    });

    it("tracks progress", () => {
      expect.assertions(2);

      const wrapper = mount(<Auth username="john" password="secret" />);

      expect(wrapper.state().isLoading).toBeTruthy();

      return promise.then().catch(() => {
        wrapper.update();
        expect(wrapper.state().isLoading).toBeFalsy();
      });
    });

    it("renders error", () => {
      expect.assertions(2);

      const wrapper = mount(<Auth username="john" password="secret" />);

      expect(wrapper.find("p").text()).toEqual("Logging in...");

      return promise.then().catch(() => {
        wrapper.update();
        expect(wrapper.find("p").text()).toEqual(`error: ${error.message}`);
      });
    });
  });
});
