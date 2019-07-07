// @flow
import reducer, { NO_ARTIST } from "../reducers";
import { dialogArtist, createDialogOpen, updateDialogOpen } from "../selectors";
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
      expect(updateDialogOpen(initialState)).toBe(false);
    });

    it("has no artist", () => {
      expect(dialogArtist(initialState)).toEqual(NO_ARTIST);
    });
  });

  describe("openUpdateDialog", () => {
    const action = openUpdateDialog(ARTIST);
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(updateDialogOpen(state)).toBe(true);
    });

    it("has artist", () => {
      expect(dialogArtist(state)).toEqual(ARTIST);
    });
  });

  describe("updateDialog", () => {
    const artist = { ...ARTIST, name: "foo" };
    const action = updateDialog(artist);
    const stateBefore = reducer(undefined, openUpdateDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is open", () => {
      expect(updateDialogOpen(state)).toBe(true);
    });

    it("has updated artist", () => {
      expect(dialogArtist(state)).toEqual(artist);
    });
  });

  describe("closeDialog", () => {
    const action = closeDialog();
    const stateBefore = reducer(undefined, openUpdateDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is closed", () => {
      expect(updateDialogOpen(state)).toBe(false);
    });

    it("has no artist", () => {
      expect(dialogArtist(state)).toEqual(NO_ARTIST);
    });
  });

  describe("openCreateDialog", () => {
    const action = openCreateDialog();
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(createDialogOpen(state)).toBe(true);
    });
  });
});
