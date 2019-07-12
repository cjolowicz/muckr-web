// @flow
import axios from "axios";

import { createUser } from "../user";
import { USER } from "../../utils/test/fixtures";

describe("createUser", () => {
  const promise = Promise.resolve({ data: USER });

  beforeAll(() => {
    jest.spyOn(axios, "post").mockReturnValue(promise);
  });

  it("returns user", async () => {
    const { username } = USER;
    const user = await createUser(username, "secret");
    expect(user).toEqual(USER);
  });
});
