// @flow
import reducer, {
  NO_ARTIST,
  getDialogArtist,
  isCreateDialogOpen,
  isUpdateDialogOpen
} from "../dialog";
import {
  openUpdateDialog,
  updateDialog,
  closeDialog,
  openCreateDialog
} from "../../actions/dialog";
import { noop } from "../../actions/noop";
import { ARTIST } from "../../test/fixtures";

describe("dialog", () => {
  const initialState = reducer(undefined, noop());

  describe("initial state", () => {
    it("is closed", () => {
      expect(isUpdateDialogOpen(initialState)).toBe(false);
    });

    it("has no artist", () => {
      expect(getDialogArtist(initialState)).toEqual(NO_ARTIST);
    });
  });

  describe("openUpdateDialog", () => {
    const action = openUpdateDialog(ARTIST);
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(isUpdateDialogOpen(state)).toBe(true);
    });

    it("has artist", () => {
      expect(getDialogArtist(state)).toEqual(ARTIST);
    });
  });

  describe("updateDialog", () => {
    const action = updateDialog("foo");
    const stateBefore = reducer(undefined, openUpdateDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is open", () => {
      expect(isUpdateDialogOpen(state)).toBe(true);
    });

    it("has updated artist", () => {
      const { id } = ARTIST;
      const { name } = action;
      expect(getDialogArtist(state)).toEqual({ id, name });
    });
  });

  describe("closeDialog", () => {
    const action = closeDialog();
    const stateBefore = reducer(undefined, openUpdateDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is closed", () => {
      expect(isUpdateDialogOpen(state)).toBe(false);
    });

    it("has no artist", () => {
      expect(getDialogArtist(state)).toEqual(NO_ARTIST);
    });
  });

  describe("openCreateDialog", () => {
    const action = openCreateDialog();
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(isCreateDialogOpen(state)).toBe(true);
    });
  });
});
