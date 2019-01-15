// @flow
import axios from "axios";

import { createTokenAuthHeader, fetchToken, login } from "../user";
import { TOKEN } from "../../../test/fixtures";

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

describe("login", () => {
  beforeAll(() => {
    localStorage.clear();
  });

  it("stores token", () => {
    const data = { token: TOKEN };
    const promise = Promise.resolve({ data });
    jest.spyOn(axios, "post").mockReturnValue(promise);

    login("john", "secret").then(() => {
      expect(localStorage.getItem("token")).toEqual(TOKEN);
    });
  });
});
