// @flow
import request from "supertest";

import app from "../app";
import { WEBPACK_LOCATION } from "../../constants";

describe("GET /", () => {
  it("responds with status 200", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  it("responds with webpack location", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.text).toEqual(
          expect.stringContaining(WEBPACK_LOCATION)
        );
        done();
      });
  });
});
