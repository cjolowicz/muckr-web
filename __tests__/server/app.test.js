// @flow
import request from 'supertest';

import app from '../../src/server/app';
import { WEBPACK_LOCATION } from '../../src/constants';

describe('GET /', () => {
  test('responds with status 200', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds with webpack location', (done) => {
    request(app).get('/').then((response) => {
      expect(response.text).toEqual(
        expect.stringContaining(WEBPACK_LOCATION),
      );
      done();
    });
  });
});
