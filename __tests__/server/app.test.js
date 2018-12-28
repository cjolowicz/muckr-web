import request from 'supertest';

import app from '../../src/server/app';

describe('GET /', () => {
  test('responds with status 200', (done) => {
    request(app).get('/').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });

  test('responds with "Hello world"', (done) => {
    request(app).get('/').then((response) => {
      expect(response.text).toBe('Hello world');
      done();
    });
  });
});
