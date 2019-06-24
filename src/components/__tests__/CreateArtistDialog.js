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

const renderCreateArtistDialog = ({ token }) => {
  const createArtist = jest.fn();
  const result = render(
    <CreateArtistDialog createArtist={createArtist} token={token} />
  );
  return { createArtist, ...result };
};

describe("CreateArtistDialog", () => {
  describe("initially", () => {
    it("has button", () => {
      const { getByTitle } = renderCreateArtistDialog({ token: TOKEN });
      expect(getByTitle("Add")).not.toBeNull();
    });

    it("opens when button is clicked", async () => {
      const { getByTitle, getByLabelText } = renderCreateArtistDialog({
        token: TOKEN
      });
      fireEvent.click(getByTitle("Add"));
      const nameField = await waitForElement(() => getByLabelText("Name"));
      expect(nameField).not.toBeNull();
    });
  });

  describe("on name change", () => {
    it("updates field", async () => {
      const { getByTitle, getByTestId } = renderCreateArtistDialog({
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
      } = renderCreateArtistDialog({ token: TOKEN });
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
      } = renderCreateArtistDialog({ token: null });
      fireEvent.click(getByTitle("Add"));
      const addDialog = await waitForElement(() => getByTestId("dialog"));
      const addDialogButton = within(addDialog).getByText("Add");
      fireEvent.click(addDialogButton);
      expect(createArtist).not.toHaveBeenCalled();
    });
  });
});
