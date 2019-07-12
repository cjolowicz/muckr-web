// @flow
import axios from "axios";

import { createTokenAuthHeader, fetchToken } from "./token";
import { TOKEN } from "../utils/test/fixtures";

describe("createTokenAuthHeader", () => {
  it("creates HTTP Token Auth header", () => {
    expect(createTokenAuthHeader(TOKEN)).toEqual({
      Authorization: `Bearer ${TOKEN}`
    });
  });
});

describe("fetchToken", () => {
  const data = { token: TOKEN };
  const promise = Promise.resolve({ data });

  beforeAll(() => {
    jest.spyOn(axios, "post").mockReturnValue(promise);
  });

  it("returns token", async () => {
    const token = await fetchToken("john", "secret");
    expect(token).toEqual(TOKEN);
  });
});
