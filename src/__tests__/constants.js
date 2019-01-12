// @flow
/* eslint-disable global-require */
describe("WEBPACK_PUBLIC_PATH", () => {
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
      const { WEBPACK_PUBLIC_PATH } = require("../constants");
      expect(WEBPACK_PUBLIC_PATH).toMatch(/^\//);
    });
  });

  describe("in development", () => {
    it("should contain localhost", () => {
      process.env.NODE_ENV = "development";
      const { WEBPACK_PUBLIC_PATH } = require("../constants");
      expect(WEBPACK_PUBLIC_PATH).toEqual(expect.stringContaining("localhost"));
    });
  });
});
