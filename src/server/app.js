// @flow
import express from 'express';
import compression from 'compression';

const app = express();

app.use(compression());
app.get('/', (request, response) => response.send('Hello world'));

export default app;
