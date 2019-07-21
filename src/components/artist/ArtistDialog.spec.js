// @flow
import React from "react";
import { fireEvent } from "@testing-library/react";

import { ArtistDialog } from "./ArtistDialog";
import render from "../../utils/test/render";
import { ARTIST, TOKEN } from "../../utils/test/fixtures";
import {
  DIALOG_TYPE_CREATE,
  DIALOG_TYPE_UPDATE
} from "../../redux/dialog/constants";

const renderArtistDialog = ({ type, token }) => {
  const createArtist = jest.fn();
  const updateArtist = jest.fn();
  const updateDialog = jest.fn();
  const closeDialog = jest.fn();
  const result = render(
    <ArtistDialog
      open
      type={type}
      token={token}
      artist={ARTIST}
      createArtist={createArtist}
      updateArtist={updateArtist}
      updateDialog={updateDialog}
      closeDialog={closeDialog}
    />
  );
  return {
    ...result,
    createArtist,
    updateArtist,
    updateDialog,
    closeDialog,
    input: result.getByLabelText("Name"),
    button: result.getByText(type === DIALOG_TYPE_CREATE ? "Add" : "Update"),
    dialog: result.getByTestId("dialog")
  };
};

describe("ArtistDialog", () => {
  const token = TOKEN;

  describe("DIALOG_TYPE_CREATE", () => {
    const type = DIALOG_TYPE_CREATE;

    describe("on change", () => {
      it("calls updateDialog", () => {
        const { input, updateDialog } = renderArtistDialog({ type, token });
        const artist = { ...ARTIST, name: "xxxxxx" };
        fireEvent.change(input, { target: { value: artist.name } });
        expect(updateDialog).toHaveBeenCalledWith(artist);
      });
    });

    describe("on submit", () => {
      it("creates artist", async () => {
        const { button, createArtist } = renderArtistDialog({ type, token });
        fireEvent.click(button);
        expect(createArtist).toHaveBeenCalledTimes(1);
      });

      it("does nothing without token", async () => {
        const { button, createArtist } = renderArtistDialog({
          type,
          token: null
        });
        fireEvent.click(button);
        expect(createArtist).not.toHaveBeenCalled();
      });
    });

    describe("on enter", () => {
      const key = { key: "Enter", code: 13, charCode: 13 };

      it("calls createArtist", async () => {
        const { input, createArtist } = renderArtistDialog({ type, token });
        fireEvent.keyPress(input, key);
        expect(createArtist).toHaveBeenCalled();
      });

      it("does not call createArtist unless input has focus", async () => {
        const { dialog, createArtist } = renderArtistDialog({ type, token });
        fireEvent.keyPress(dialog, key);
        expect(createArtist).not.toHaveBeenCalled();
      });

      it("calls closeDialog", async () => {
        const { input, closeDialog } = renderArtistDialog({ type, token });
        fireEvent.keyPress(input, key);
        expect(closeDialog).toHaveBeenCalled();
      });
    });

    describe("on escape", () => {
      const key = { key: "Escape", code: 27, charCode: 27 };

      it("does not call createArtist", async () => {
        const { input, createArtist } = renderArtistDialog({ type, token });
        fireEvent.keyPress(input, key);
        expect(createArtist).not.toHaveBeenCalled();
      });
    });

    describe("on other keys", () => {
      const key = { key: "A", code: 65, charCode: 65 };

      it("does not call closeDialog", async () => {
        const { input, closeDialog } = renderArtistDialog({ type, token });
        fireEvent.keyPress(input, key);
        expect(closeDialog).not.toHaveBeenCalled();
      });
    });
  });

  describe("DIALOG_TYPE_UPDATE", () => {
    const type = DIALOG_TYPE_UPDATE;

    it("updates artist", () => {
      const { button, updateArtist } = renderArtistDialog({ type, token });
      fireEvent.click(button);
      expect(updateArtist).toHaveBeenCalledWith(token, ARTIST);
    });

    it("closes dialog", () => {
      const { button, closeDialog } = renderArtistDialog({ type, token: null });
      fireEvent.click(button);
      expect(closeDialog).toHaveBeenCalled();
    });
  });
});
