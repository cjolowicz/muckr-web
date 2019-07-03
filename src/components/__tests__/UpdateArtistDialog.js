// @flow
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import UpdateArtistDialog from "../UpdateArtistDialog";
import { ARTIST, TOKEN } from "../../test/fixtures";

const renderUpdateArtistDialog = ({ token }) => {
  const closeDialog = jest.fn();
  const updateArtist = jest.fn();
  const updateDialog = jest.fn();
  const utils = render(
    <UpdateArtistDialog
      open
      updateDialog={updateDialog}
      closeDialog={closeDialog}
      updateArtist={updateArtist}
      token={token}
      artist={ARTIST}
    />
  );
  return { ...utils, closeDialog, updateArtist, updateDialog };
};

describe("UpdateArtistDialog", () => {
  describe("on change", () => {
    it("triggers updateDialog", () => {
      const { getByLabelText, updateDialog } = renderUpdateArtistDialog({
        token: TOKEN
      });
      const textField = getByLabelText("Name");
      const artist = { ...ARTIST, name: "x" };
      fireEvent.change(textField, { target: { value: artist.name } });
      expect(updateDialog).toHaveBeenCalledWith(artist);
    });
  });

  describe("on submit", () => {
    it("updates artist", () => {
      const { getByText, updateArtist } = renderUpdateArtistDialog({
        token: TOKEN
      });
      const submitButton = getByText("Update");
      fireEvent.click(submitButton);
      expect(updateArtist).toHaveBeenCalledWith(TOKEN, ARTIST);
    });

    it("closes dialog", () => {
      const { getByText, closeDialog } = renderUpdateArtistDialog({
        token: null
      });
      const submitButton = getByText("Update");
      fireEvent.click(submitButton);
      expect(closeDialog).toHaveBeenCalled();
    });
  });
});
