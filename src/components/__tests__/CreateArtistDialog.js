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

describe("CreateArtistDialog", () => {
  const classes = {
    fab: ""
  };

  const renderDialog = () => {
    const createArtist = jest.fn();
    const result = render(
      <CreateArtistDialog
        createArtist={createArtist}
        token={TOKEN}
        classes={classes}
      />
    );
    return { createArtist, ...result };
  };

  describe("initially", () => {
    it("has button", () => {
      const { getByTitle } = renderDialog();
      expect(getByTitle("Add")).not.toBeNull();
    });

    it("opens when button is clicked", async () => {
      const { getByTitle, getByLabelText } = renderDialog();
      fireEvent.click(getByTitle("Add"));
      const nameField = await waitForElement(() => getByLabelText("Name"));
      expect(nameField).not.toBeNull();
    });
  });

  describe("on submit", () => {
    it("creates artist", async () => {
      const { createArtist, getByTitle, getByTestId } = renderDialog();
      fireEvent.click(getByTitle("Add"));
      const addDialog = await waitForElement(() => getByTestId("dialog"));
      const addDialogButton = within(addDialog).getByText("Add");
      fireEvent.click(addDialogButton);
      expect(createArtist).toHaveBeenCalledTimes(1);
    });

    it("does nothing without token", async () => {
      const createArtist = jest.fn();
      const { getByTitle, getByTestId } = render(
        <CreateArtistDialog
          createArtist={createArtist}
          token={null}
          classes={classes}
        />
      );
      fireEvent.click(getByTitle("Add"));
      const addDialog = await waitForElement(() => getByTestId("dialog"));
      const addDialogButton = within(addDialog).getByText("Add");
      fireEvent.click(addDialogButton);
      expect(createArtist).not.toHaveBeenCalled();
    });
  });
});
