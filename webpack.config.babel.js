// @flow
import path from 'path';

import { STATIC_PATH } from './src/constants';

const isProduction = process.env.NODE_ENV === 'production';
const WEBPACK_PATH = 'dist';
const WEBPACK_FILE = 'js/bundle.js';
const WEBPACK_DEV_SERVER_PORT = 7000;
const WEBPACK_DEV_SERVER_URL = `http://localhost:${WEBPACK_DEV_SERVER_PORT}/${WEBPACK_PATH}/`;
const WEBPACK_PUBLIC_PATH = isProduction ? STATIC_PATH : WEBPACK_DEV_SERVER_URL;
const WEBPACK_LOCATION = `${WEBPACK_PUBLIC_PATH}${WEBPACK_FILE}`;

export {
  WEBPACK_PATH,
  WEBPACK_LOCATION,
};

export default {
  entry: [
    './src/client/index.js',
  ],
  output: {
    filename: WEBPACK_FILE,
    path: path.resolve(__dirname, WEBPACK_PATH),
    publicPath: WEBPACK_PUBLIC_PATH,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: isProduction ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: WEBPACK_DEV_SERVER_PORT,
  },
  mode: isProduction ? 'production' : 'development',
};
