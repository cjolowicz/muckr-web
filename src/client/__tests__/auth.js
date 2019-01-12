// @flow
import axios from "axios";

import { createTokenAuthHeader, fetchToken } from "../auth";
import { TOKEN } from "../../test/fixtures";

describe("createTokenAuthHeader", () => {
  it("creates HTTP Token Auth header", () => {
    expect(createTokenAuthHeader(TOKEN)).toEqual({
      Authorization: `Bearer ${TOKEN}`
    });
  });
});

describe("fetchToken", () => {
  it("returns token", done => {
    const data = { token: TOKEN };
    const promise = Promise.resolve({ data });
    jest.spyOn(axios, "post").mockReturnValue(promise);

    fetchToken("john", "secret").then(token => {
      expect(token).toEqual(TOKEN);
    });
    done();
  });
});
