/**
 * @jest-environment node
 */
// @flow
import request from "supertest";

import app from "../app";
import * as routes from "../../routes";
import { WEBPACK_LOCATION } from "../constants";

describe("GET /", () => {
  it("responds with status 200", async () => {
    const response = await request(app).get(routes.INDEX);
    expect(response.statusCode).toBe(200);
  });

  it("responds with webpack location", async () => {
    const response = await request(app).get(routes.INDEX);
    expect(response.text).toEqual(expect.stringContaining(WEBPACK_LOCATION));
  });
});
