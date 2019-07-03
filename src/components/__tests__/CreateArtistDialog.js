// @flow
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import CreateArtistDialog from "../CreateArtistDialog";
import { TOKEN } from "../../test/fixtures";

const renderCreateArtistDialog = ({ open, token }) => {
  const openDialog = jest.fn();
  const createArtist = jest.fn();
  const result = render(
    <CreateArtistDialog
      open={open}
      openDialog={openDialog}
      closeDialog={jest.fn()}
      createArtist={createArtist}
      token={token}
    />
  );
  return { ...result, createArtist, openDialog };
};

describe("CreateArtistDialog", () => {
  describe("on name change", () => {
    it("updates field", async () => {
      const { getByLabelText } = renderCreateArtistDialog({
        open: true,
        token: TOKEN
      });
      const input = getByLabelText("Name");
      const value = "Lorem Ipsum";
      fireEvent.change(input, { target: { value } });
      expect(input.value).toEqual(value);
    });
  });

  describe("on submit", () => {
    it("creates artist", async () => {
      const { createArtist, getByText } = renderCreateArtistDialog({
        open: true,
        token: TOKEN
      });
      const button = getByText("Add");
      fireEvent.click(button);
      expect(createArtist).toHaveBeenCalledTimes(1);
    });

    it("does nothing without token", async () => {
      const { createArtist, getByText } = renderCreateArtistDialog({
        open: true,
        token: null
      });
      const button = getByText("Add");
      fireEvent.click(button);
      expect(createArtist).not.toHaveBeenCalled();
    });
  });
});
