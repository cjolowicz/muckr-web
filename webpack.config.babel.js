// @flow
import path from "path";
import "dotenv/config";
import Dotenv from "dotenv-webpack";

import {
  PRODUCTION,
  WEBPACK_FILE,
  WEBPACK_DIR,
  WEBPACK_PUBLIC_PATH,
  WEBPACK_PORT
} from "./src/constants";

export default {
  entry: ["./src/client/index.js"],
  output: {
    filename: WEBPACK_FILE,
    path: path.resolve(__dirname, WEBPACK_DIR),
    publicPath: WEBPACK_PUBLIC_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      }
    ]
  },
  plugins: [
    new Dotenv({
      systemvars: true
    })
  ],
  devtool: PRODUCTION ? "source-map" : "eval",
  devServer: {
    port: WEBPACK_PORT
  },
  mode: PRODUCTION ? "production" : "development"
};
