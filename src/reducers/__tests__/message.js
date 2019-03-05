// @flow
import reducer, { isMessageOpen, getMessage } from "../message";
import { openMessage, closeMessage } from "../../actions/message";
import { fetchTokenFailure } from "../../actions/token";
import { createUserSuccess, createUserFailure } from "../../actions/user";
import { noop } from "../../actions/noop";
import { USER, GENERIC_ERROR, UNAUTHORIZED_ERROR } from "../../test/fixtures";

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

          it("has generic error message", () => {
            expect(getMessage(state)).toEqual("An unknown error occurred");
          });
        });

        describe("unauthorized", () => {
          const action = fetchTokenFailure(UNAUTHORIZED_ERROR);
          const state = reducer({ open, message }, action);

          it("is open", () => {
            expect(isMessageOpen(state)).toBe(true);
          });

          it("has login error message", () => {
            expect(getMessage(state)).toEqual("Invalid username or password");
          });
        });
      });

      describe("createUserFailure", () => {
        const action = createUserFailure(GENERIC_ERROR);
        const state = reducer({ open, message }, action);

        it("is open", () => {
          expect(isMessageOpen(state)).toBe(true);
        });

        it("has generic error message", () => {
          expect(getMessage(state)).toEqual("An unknown error occurred");
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
