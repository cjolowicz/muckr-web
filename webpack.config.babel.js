// @flow
type Env = {
  production: boolean
};

export default ({ production }: Env) => ({
  mode: production ? "production" : "development",
  devtool: production ? "source-map" : "eval-source-map",
  devServer: {
    port: 7000
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
  }
});
