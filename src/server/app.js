// @flow
import express from 'express';
import compression from 'compression';

import { STATIC_PATH } from '../constants';
import { WEBPACK_PATH } from '../../webpack.config.babel';

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static(WEBPACK_PATH));
app.get('/', (request, response) => response.send('Hello world'));

export default app;
