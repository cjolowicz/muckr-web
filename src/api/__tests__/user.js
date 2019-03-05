// @flow
import axios from "axios";

import { createUser } from "../user";
import { USER } from "../../test/fixtures";

describe("createUser", () => {
  const promise = Promise.resolve({ data: USER });

  beforeAll(() => {
    jest.spyOn(axios, "post").mockReturnValue(promise);
  });

  it("returns user", async () => {
    const user = await createUser("jane", "secret");
    expect(user).toEqual(USER);
  });
});
