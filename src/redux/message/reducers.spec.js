// @flow
import reducer, { formatErrorMessage } from "./reducers";
import { openMessage, closeMessage } from "./actions";
import { fetchTokenFailure } from "../token/actions";
import {
  createArtistFailure,
  removeArtistFailure,
  updateArtistFailure,
  fetchArtistsFailure
} from "../artist/actions";
import { createUserSuccess, createUserFailure } from "../user/actions";
import { NOOP } from "../noop/constants";
import { noop } from "../noop/actions";
import { USER, GENERIC_ERROR } from "../../utils/test/fixtures";

describe("formatErrorMessage", () => {
  describe("unknown action", () => {
    it("adds no prefix", () => {
      const result = formatErrorMessage(NOOP, "failure");
      expect(result).toEqual("failure");
    });
  });
});

describe("message", () => {
  describe("initially", () => {
    const state = reducer(undefined, noop());

    it("has no message", () => {
      expect(state).toBeNull();
    });
  });

  describe.each([[null], [""], ["success"]])("with message", initialState => {
    describe("openMessage", () => {
      const action = openMessage("failure");
      const state = reducer(initialState, action);

      it("has message", () => {
        expect(state).toEqual(action.payload.message);
      });
    });

    describe("fetchTokenFailure", () => {
      describe("unknown error", () => {
        const action = fetchTokenFailure(GENERIC_ERROR);
        const state = reducer(initialState, action);

        it("has error message", () => {
          expect(state).toEqual("Cannot log in: failure");
        });
      });
    });

    describe("createUserFailure", () => {
      const action = createUserFailure(GENERIC_ERROR);
      const state = reducer(initialState, action);

      it("has error message", () => {
        expect(state).toEqual("Cannot create user: failure");
      });
    });

    describe("fetchArtistsFailure", () => {
      const action = fetchArtistsFailure(GENERIC_ERROR);
      const state = reducer(initialState, action);

      it("has error message", () => {
        expect(state).toEqual("Cannot load artists: failure");
      });
    });

    describe("createArtistFailure", () => {
      const action = createArtistFailure(GENERIC_ERROR);
      const state = reducer(initialState, action);

      it("has error message", () => {
        expect(state).toEqual("Cannot create artist: failure");
      });
    });

    describe("removeArtistFailure", () => {
      const action = removeArtistFailure(GENERIC_ERROR);
      const state = reducer(initialState, action);

      it("has error message", () => {
        expect(state).toEqual("Cannot remove artist: failure");
      });
    });

    describe("updateArtistFailure", () => {
      const action = updateArtistFailure(GENERIC_ERROR);
      const state = reducer(initialState, action);

      it("has error message", () => {
        expect(state).toEqual("Cannot update artist: failure");
      });
    });

    describe("createUserSuccess", () => {
      const action = createUserSuccess(USER);
      const state = reducer(initialState, action);

      it("has success message", () => {
        expect(state).toEqual("Account created");
      });
    });

    describe("closeMessage", () => {
      const action = closeMessage();
      const state = reducer(initialState, action);

      it("has no message", () => {
        expect(state).toBeNull();
      });
    });
  });
});
