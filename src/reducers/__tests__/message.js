// @flow
import reducer, {
  isMessageOpen,
  getMessage,
  formatErrorMessage
} from "../message";
import { openMessage, closeMessage } from "../../actions/message";
import { fetchTokenFailure } from "../../actions/token";
import {
  createArtistSuccess,
  createArtistFailure,
  removeArtistSuccess,
  removeArtistFailure,
  updateArtistSuccess,
  updateArtistFailure,
  fetchArtistsFailure
} from "../../actions/artist";
import { createUserSuccess, createUserFailure } from "../../actions/user";
import { NOOP, noop } from "../../actions/noop";
import { ARTIST, USER, GENERIC_ERROR } from "../../test/fixtures";

describe("formatErrorMessage", () => {
  describe("unknown action", () => {
    it("adds no prefix", () => {
      const message = formatErrorMessage(NOOP, "failure");
      expect(message).toEqual("failure");
    });
  });
});

describe("message", () => {
  describe("initially", () => {
    const state = reducer(undefined, noop());

    it("is closed", () => {
      expect(isMessageOpen(state)).toBe(false);
    });

    it("has no message", () => {
      expect(getMessage(state)).toBeNull();
    });
  });

  describe.each([[false], [true]])("with open", open => {
    describe.each([[null], [""], ["success"]])("with message", message => {
      describe("openMessage", () => {
        const action = openMessage("failure");
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has message", () => {
          expect(getMessage(state)).toEqual(action.message);
        });
      });

      describe("fetchTokenFailure", () => {
        describe("unknown error", () => {
          const action = fetchTokenFailure(GENERIC_ERROR);
          const state = reducer({ open, message }, action);

          it("is open", () => {
            expect(isMessageOpen(state)).toBe(true);
          });

          it("has error message", () => {
            expect(getMessage(state)).toEqual("Cannot log in: failure");
          });
        });
      });

      describe("createUserFailure", () => {
        const action = createUserFailure(GENERIC_ERROR);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has error message", () => {
          expect(getMessage(state)).toEqual("Cannot create user: failure");
        });
      });

      describe("fetchArtistsFailure", () => {
        const action = fetchArtistsFailure(GENERIC_ERROR);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has error message", () => {
          expect(getMessage(state)).toEqual("Cannot load artists: failure");
        });
      });

      describe("createArtistFailure", () => {
        const action = createArtistFailure(GENERIC_ERROR);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has error message", () => {
          expect(getMessage(state)).toEqual("Cannot create artist: failure");
        });
      });

      describe("createArtistSuccess", () => {
        const action = createArtistSuccess(ARTIST);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has success message", () => {
          expect(getMessage(state)).toEqual("Artist created");
        });
      });

      describe("removeArtistFailure", () => {
        const action = removeArtistFailure(GENERIC_ERROR);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has error message", () => {
          expect(getMessage(state)).toEqual("Cannot remove artist: failure");
        });
      });

      describe("removeArtistSuccess", () => {
        const { id } = ARTIST;
        const action = removeArtistSuccess(id);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has success message", () => {
          expect(getMessage(state)).toEqual("Artist removed");
        });
      });

      describe("updateArtistFailure", () => {
        const action = updateArtistFailure(GENERIC_ERROR);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has error message", () => {
          expect(getMessage(state)).toEqual("Cannot update artist: failure");
        });
      });

      describe("updateArtistSuccess", () => {
        const action = updateArtistSuccess(ARTIST);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has success message", () => {
          expect(getMessage(state)).toEqual("Artist updated");
        });
      });

      describe("createUserSuccess", () => {
        const action = createUserSuccess(USER);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has success message", () => {
          expect(getMessage(state)).toEqual("Account created");
        });
      });

      describe("closeMessage", () => {
        const action = closeMessage();
        const state = reducer({ open, message }, action);

        it("is closed", () => {
          expect(isMessageOpen(state)).toBe(false);
        });

        it("has no message", () => {
          expect(getMessage(state)).toBeNull();
        });
      });
    });
  });
});
