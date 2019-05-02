// @flow
import path from "path";

export default (env: Object) => ({
  entry: ["./src/client/index.js"],
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: env.production ? "/static" : "http://localhost:7000/dist"
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
  devtool: env.production ? "source-map" : "eval",
  devServer: {
    port: 7000
  },
  mode: env.production ? "production" : "development"
});
