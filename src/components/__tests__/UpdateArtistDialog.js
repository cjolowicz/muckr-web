// @flow
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import UpdateArtistDialog from "../UpdateArtistDialog";
import { ARTIST, TOKEN } from "../../test/fixtures";

describe("UpdateArtistDialog", () => {
  describe("on change", () => {
    it("triggers updateDialog", () => {
      const updateDialog = jest.fn();
      const { getByLabelText } = render(
        <UpdateArtistDialog
          open
          updateDialog={updateDialog}
          closeDialog={jest.fn()}
          updateArtist={jest.fn()}
          token={TOKEN}
          artist={ARTIST}
        />
      );
      const textField = getByLabelText("Name");
      fireEvent.change(textField, { target: { value: "x" } });
      expect(updateDialog).toHaveBeenCalledWith("x");
    });
  });

  describe("on submit", () => {
    it("updates artist", () => {
      const updateArtist = jest.fn();
      const { getByText } = render(
        <UpdateArtistDialog
          open
          updateDialog={jest.fn()}
          closeDialog={jest.fn()}
          updateArtist={updateArtist}
          token={TOKEN}
          artist={ARTIST}
        />
      );
      const submitButton = getByText("Update");
      fireEvent.click(submitButton);
      expect(updateArtist).toHaveBeenCalledWith(TOKEN, ARTIST);
    });

    it("closes dialog", () => {
      const closeDialog = jest.fn();
      const { getByText } = render(
        <UpdateArtistDialog
          open
          updateDialog={jest.fn()}
          closeDialog={closeDialog}
          updateArtist={jest.fn()}
          token={null}
          artist={null}
        />
      );
      const submitButton = getByText("Update");
      fireEvent.click(submitButton);
      expect(closeDialog).toHaveBeenCalled();
    });
  });
});
