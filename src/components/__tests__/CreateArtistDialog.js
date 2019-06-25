// @flow
import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  within
} from "@testing-library/react";

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
  describe("initially", () => {
    it("has button", () => {
      const { getByTitle } = renderCreateArtistDialog({
        open: false,
        token: TOKEN
      });
      expect(getByTitle("Add")).not.toBeNull();
    });

    it("opens when button is clicked", async () => {
      const { getByTitle, openDialog } = renderCreateArtistDialog({
        open: false,
        token: TOKEN
      });
      fireEvent.click(getByTitle("Add"));
      expect(openDialog).toHaveBeenCalled();
    });
  });

  describe("on name change", () => {
    it("updates field", async () => {
      const { getByTitle, getByTestId } = renderCreateArtistDialog({
        open: true,
        token: TOKEN
      });
      fireEvent.click(getByTitle("Add"));
      const dialog = await waitForElement(() => getByTestId("dialog"));
      const input = within(dialog).getByLabelText("Name");
      const value = "Lorem Ipsum";
      fireEvent.change(input, { target: { value } });
      expect(input.value).toEqual(value);
    });
  });

  describe("on submit", () => {
    it("creates artist", async () => {
      const {
        createArtist,
        getByTitle,
        getByTestId
      } = renderCreateArtistDialog({ open: true, token: TOKEN });
      fireEvent.click(getByTitle("Add"));
      const addDialog = await waitForElement(() => getByTestId("dialog"));
      const addDialogButton = within(addDialog).getByText("Add");
      fireEvent.click(addDialogButton);
      expect(createArtist).toHaveBeenCalledTimes(1);
    });

    it("does nothing without token", async () => {
      const {
        createArtist,
        getByTitle,
        getByTestId
      } = renderCreateArtistDialog({ open: true, token: null });
      fireEvent.click(getByTitle("Add"));
      const addDialog = await waitForElement(() => getByTestId("dialog"));
      const addDialogButton = within(addDialog).getByText("Add");
      fireEvent.click(addDialogButton);
      expect(createArtist).not.toHaveBeenCalled();
    });
  });
});
