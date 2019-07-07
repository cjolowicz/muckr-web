// @flow
import reducer, { formatErrorMessage } from "../reducers";
import { message } from "../selectors";
import { openMessage, closeMessage } from "../actions";
import { fetchTokenFailure } from "../../token/actions";
import {
  createArtistSuccess,
  createArtistFailure,
  removeArtistSuccess,
  removeArtistFailure,
  updateArtistSuccess,
  updateArtistFailure,
  fetchArtistsFailure
} from "../../artist/actions";
import { createUserSuccess, createUserFailure } from "../../user/actions";
import { NOOP } from "../../noop/constants";
import { noop } from "../../noop/actions";
import { ARTIST, USER, GENERIC_ERROR } from "../../../test/fixtures";

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
      expect(message(state)).toBeNull();
    });
  });

  describe.each([[false], [true]])("with open", open$ => {
    describe.each([[null], [""], ["success"]])("with message", message$ => {
      describe("openMessage", () => {
        const action = openMessage("failure");
        const state = reducer({ open: open$, message: message$ }, action);

        it("has message", () => {
          expect(message(state)).toEqual(action.payload.message);
        });
      });

      describe("fetchTokenFailure", () => {
        describe("unknown error", () => {
          const action = fetchTokenFailure(GENERIC_ERROR);
          const state = reducer({ open: open$, message: message$ }, action);

          it("has error message", () => {
            expect(message(state)).toEqual("Cannot log in: failure");
          });
        });
      });

      describe("createUserFailure", () => {
        const action = createUserFailure(GENERIC_ERROR);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has error message", () => {
          expect(message(state)).toEqual("Cannot create user: failure");
        });
      });

      describe("fetchArtistsFailure", () => {
        const action = fetchArtistsFailure(GENERIC_ERROR);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has error message", () => {
          expect(message(state)).toEqual("Cannot load artists: failure");
        });
      });

      describe("createArtistFailure", () => {
        const action = createArtistFailure(GENERIC_ERROR);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has error message", () => {
          expect(message(state)).toEqual("Cannot create artist: failure");
        });
      });

      describe("createArtistSuccess", () => {
        const action = createArtistSuccess(ARTIST);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has success message", () => {
          expect(message(state)).toEqual("Artist created");
        });
      });

      describe("removeArtistFailure", () => {
        const action = removeArtistFailure(GENERIC_ERROR);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has error message", () => {
          expect(message(state)).toEqual("Cannot remove artist: failure");
        });
      });

      describe("removeArtistSuccess", () => {
        const { id } = ARTIST;
        const action = removeArtistSuccess(id);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has success message", () => {
          expect(message(state)).toEqual("Artist removed");
        });
      });

      describe("updateArtistFailure", () => {
        const action = updateArtistFailure(GENERIC_ERROR);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has error message", () => {
          expect(message(state)).toEqual("Cannot update artist: failure");
        });
      });

      describe("updateArtistSuccess", () => {
        const action = updateArtistSuccess(ARTIST);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has success message", () => {
          expect(message(state)).toEqual("Artist updated");
        });
      });

      describe("createUserSuccess", () => {
        const action = createUserSuccess(USER);
        const state = reducer({ open: open$, message: message$ }, action);

        it("has success message", () => {
          expect(message(state)).toEqual("Account created");
        });
      });

      describe("closeMessage", () => {
        const action = closeMessage();
        const state = reducer({ open: open$, message: message$ }, action);

        it("has no message", () => {
          expect(message(state)).toBeNull();
        });
      });
    });
  });
});
