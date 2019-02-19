// @flow
import reducer, { isMessageOpen, getMessage } from "../message";
import { openMessage, closeMessage } from "../../actions/message";
import { fetchTokenFailure } from "../../actions/fetchToken";
import type { $FetchError } from "../../api/user";
import { unsafeCast } from "../../utils";

describe("message", () => {
  describe("initially", () => {
    const state = reducer(undefined, {});

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
          const action = fetchTokenFailure(new Error("failure"));
          const state = reducer({ open, message }, action);

          it("is open", () => {
            expect(isMessageOpen(state)).toBe(true);
          });

          it("has generic error message", () => {
            expect(getMessage(state)).toEqual("An unknown error occurred");
          });
        });

        describe("unauthorized", () => {
          const error = unsafeCast<$FetchError>({ response: { status: 401 } });
          const action = fetchTokenFailure(error);
          const state = reducer({ open, message }, action);

          it("is open", () => {
            expect(isMessageOpen(state)).toBe(true);
          });

          it("has login error message", () => {
            expect(getMessage(state)).toEqual("Invalid username or password");
          });
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
