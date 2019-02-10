// @flow
import express from "express";
import compression from "compression";
import cookiesMiddleware from "universal-cookie-express";

import render from "./render";
import { STATIC_PATH, WEBPACK_DIR } from "../constants";

const app = express();

app.use(compression());
app.use(STATIC_PATH, express.static(WEBPACK_DIR));
app.use(cookiesMiddleware());
app.use(render);

export default app;
