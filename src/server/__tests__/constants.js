// @flow
/* eslint-disable global-require */
describe("WEBPACK_LOCATION", () => {
  const ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
  });

  afterEach(() => {
    process.env = ENV;
  });

  describe("in production", () => {
    it("should start with /", () => {
      process.env.NODE_ENV = "production";
      const { WEBPACK_LOCATION } = require("../constants");
      expect(WEBPACK_LOCATION).toMatch(/^\//);
    });
  });

  describe("in development", () => {
    it("should contain localhost", () => {
      process.env.NODE_ENV = "development";
      const { WEBPACK_LOCATION } = require("../constants");
      expect(WEBPACK_LOCATION).toEqual(expect.stringContaining("localhost"));
    });
  });
});
