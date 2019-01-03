import path from 'path';
import Dotenv from 'dotenv-webpack';

import {
  PRODUCTION,
  WEBPACK_FILE,
  WEBPACK_PATH,
  WEBPACK_PUBLIC_PATH,
  WEBPACK_DEV_SERVER_PORT,
} from './src/constants';

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
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
  devtool: PRODUCTION ? 'source-map' : 'eval',
  resolve: {
    extensions: ['.js'],
  },
  devServer: {
    port: WEBPACK_DEV_SERVER_PORT,
  },
  mode: PRODUCTION ? 'production' : 'development',
};
