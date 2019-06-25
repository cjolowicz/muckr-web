// @flow
import reducer, {
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
      expect(getDialogArtist(initialState)).toBeNull();
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

  describe("updateDialog when closed", () => {
    const action = updateDialog("foo");
    const state = reducer(initialState, action);

    it("is closed", () => {
      expect(isUpdateDialogOpen(state)).toBe(false);
    });

    it("has no artist", () => {
      expect(getDialogArtist(state)).toBeNull();
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
      expect(getDialogArtist(state)).toBeNull();
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
