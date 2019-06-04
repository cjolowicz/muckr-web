// @flow
import reducer, { isDialogOpen, getDialogArtist } from "../dialog";
import { openDialog, updateDialog, closeDialog } from "../../actions/dialog";
import { noop } from "../../actions/noop";
import { ARTIST } from "../../test/fixtures";

describe("dialog", () => {
  const initialState = reducer(undefined, noop());

  describe("initial state", () => {
    it("is closed", () => {
      expect(isDialogOpen(initialState)).toBe(false);
    });

    it("has no artist", () => {
      expect(getDialogArtist(initialState)).toBeNull();
    });
  });

  describe("openDialog", () => {
    const action = openDialog(ARTIST);
    const state = reducer(initialState, action);

    it("is open", () => {
      expect(isDialogOpen(state)).toBe(true);
    });

    it("has artist", () => {
      expect(getDialogArtist(state)).toEqual(ARTIST);
    });
  });

  describe("updateDialog", () => {
    const action = updateDialog("foo");
    const stateBefore = reducer(undefined, openDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is open", () => {
      expect(isDialogOpen(state)).toBe(true);
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
      expect(isDialogOpen(state)).toBe(false);
    });

    it("has no artist", () => {
      expect(getDialogArtist(state)).toBeNull();
    });
  });

  describe("closeDialog", () => {
    const action = closeDialog();
    const stateBefore = reducer(undefined, openDialog(ARTIST));
    const state = reducer(stateBefore, action);

    it("is closed", () => {
      expect(isDialogOpen(state)).toBe(false);
    });

    it("has no artist", () => {
      expect(getDialogArtist(state)).toBeNull();
    });
  });
});
