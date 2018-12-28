// @flow
import path from 'path';

const isProduction = process.env.NODE_ENV === 'production';
const WEBPACK_PATH = 'dist';
const WEBPACK_DEV_SERVER_PORT = 7000;
const WEBPACK_DEV_SERVER_URL = `http://localhost:${WEBPACK_DEV_SERVER_PORT}/${WEBPACK_PATH}/`

export default {
  entry: [
    './src/client/index.js',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, WEBPACK_PATH),
    publicPath: isProduction ? '/static/' : WEBPACK_DEV_SERVER_URL,
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
