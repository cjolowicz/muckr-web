// @flow
export default (env: Object) => ({
  output: {
    publicPath: env.production ? "/static/" : "http://localhost:7000/dist/"
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
