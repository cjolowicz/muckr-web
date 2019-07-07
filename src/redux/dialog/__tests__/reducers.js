// @flow
import reducer, { NO_ARTIST } from "../reducers";
import { DIALOG_TYPE_CREATE, DIALOG_TYPE_UPDATE } from "../constants";
import { artist, type } from "../selectors";
import {
  openUpdateDialog,
  updateDialog,
  closeDialog,
  openCreateDialog
} from "../actions";
import { noop } from "../../noop/actions";
import { ARTIST } from "../../../test/fixtures";

describe("dialog", () => {
  const initialState = reducer(undefined, noop());

  describe("initial state", () => {
    it("is closed", () => {
      expect(type(initialState)).toBeNull();
    });

    it("has no artist", () => {
      expect(artist(initialState)).toEqual(NO_ARTIST);
    });
  });

  describe("openUpdateDialog", () => {
    const action = openUpdateDialog(ARTIST);
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(type(state)).toBe(DIALOG_TYPE_UPDATE);
    });

    it("has artist", () => {
      expect(artist(state)).toEqual(ARTIST);
    });
  });

  describe("updateDialog", () => {
    const action = updateDialog({ ...ARTIST, name: "foo" });
    const stateBefore = reducer(undefined, openUpdateDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is open", () => {
      expect(type(state)).toBe(DIALOG_TYPE_UPDATE);
    });

    it("has updated artist", () => {
      expect(artist(state)).toEqual(action.payload.artist);
    });
  });

  describe("closeDialog", () => {
    const action = closeDialog();
    const stateBefore = reducer(undefined, openUpdateDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is closed", () => {
      expect(type(state)).toBe(null);
    });

    it("has no artist", () => {
      expect(artist(state)).toEqual(NO_ARTIST);
    });
  });

  describe("openCreateDialog", () => {
    const action = openCreateDialog();
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(type(state)).toBe(DIALOG_TYPE_CREATE);
    });
  });
});
