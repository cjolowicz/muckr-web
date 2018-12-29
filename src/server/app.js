// @flow
import express from 'express';
import compression from 'compression';

import {
  STATIC_PATH,
  WEBPACK_PATH,
  WEBPACK_LOCATION,
} from '../constants';

const HOMEPAGE = `<!doctype html>
<html>
  <body>
    <div class="app"></div>
    <script src="${WEBPACK_LOCATION}"></script>
  </body>
</html>`;

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static(WEBPACK_PATH));
app.get('/', (request, response: express$Response) => response.send(HOMEPAGE));

export default app;
