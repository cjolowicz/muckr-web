// @flow
import axios from "axios";

import { createTokenAuthHeader, fetchToken, login } from "../user";
import { TOKEN } from "../../test/fixtures";

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

  it("returns token", () =>
    fetchToken("john", "secret").then(token => {
      expect(token).toEqual(TOKEN);
    }));
});

describe("login", () => {
  const data = { token: TOKEN };
  const promise = Promise.resolve({ data });

  beforeAll(() => {
    jest.spyOn(axios, "post").mockReturnValue(promise);
  });

  beforeEach(() => {
    localStorage.clear();
  });

  it("stores token", () =>
    login("john", "secret").then(() => {
      expect(localStorage.getItem("token")).toEqual(TOKEN);
    }));
});
