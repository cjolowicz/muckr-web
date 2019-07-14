// @flow
import reducer from "./reducers";
import { openNavigation, closeNavigation } from "./actions";
import { noop } from "../noop/actions";

describe("reducer", () => {
  describe("initially", () => {
    it("is closed", () => {
      const state = reducer(undefined, noop());
      expect(state).toBe(false);
    });
  });

  describe("openNavigation", () => {
    test.each([[false], [true]])("is open", initialState => {
      const state = reducer(initialState, openNavigation());
      expect(state).toBe(true);
    });
  });

  describe("closeNavigation", () => {
    test.each([[false], [true]])("is closed", initialState => {
      const state = reducer(initialState, closeNavigation());
      expect(state).toBe(false);
    });
  });
});
