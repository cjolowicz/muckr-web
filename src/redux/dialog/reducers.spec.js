// @flow
import reducer, { NO_ARTIST } from "./reducers";
import { DIALOG_TYPE_CREATE, DIALOG_TYPE_UPDATE } from "./constants";
import { artist, type } from "./selectors";
import {
  openUpdateDialog,
  updateDialog,
  closeDialog,
  openCreateDialog
} from "./actions";
import { noop } from "../noop/actions";
import { ARTIST } from "../../utils/test/fixtures";
import type { State } from "./types";

const applyReducer = actions =>
  actions.reduce(reducer, ((undefined: any): State));

describe("dialog", () => {
  describe("initial state", () => {
    const state = applyReducer([noop()]);

    it("is closed", () => {
      expect(type(state)).toBeNull();
    });

    it("has no artist", () => {
      expect(artist(state)).toEqual(NO_ARTIST);
    });
  });

  describe("openUpdateDialog", () => {
    const state = applyReducer([openUpdateDialog(ARTIST)]);

    it("is open", () => {
      expect(type(state)).toBe(DIALOG_TYPE_UPDATE);
    });

    it("has artist", () => {
      expect(artist(state)).toEqual(ARTIST);
    });
  });

  describe("updateDialog", () => {
    const action = updateDialog({ ...ARTIST, name: "foo" });
    const state = applyReducer([openUpdateDialog(ARTIST), action]);

    it("is open", () => {
      expect(type(state)).toBe(DIALOG_TYPE_UPDATE);
    });

    it("has updated artist", () => {
      expect(artist(state)).toEqual(action.payload.artist);
    });
  });

  describe("closeDialog", () => {
    const state = applyReducer([openUpdateDialog(ARTIST), closeDialog()]);

    it("is closed", () => {
      expect(type(state)).toBe(null);
    });

    it("has no artist", () => {
      expect(artist(state)).toEqual(NO_ARTIST);
    });
  });

  describe("openCreateDialog", () => {
    const state = applyReducer([openCreateDialog()]);

    it("is open", () => {
      expect(type(state)).toBe(DIALOG_TYPE_CREATE);
    });
  });
});
