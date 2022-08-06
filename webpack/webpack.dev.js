const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = require("./webpack.base")({
  mode: "development",
  entry: [
    require.resolve("react-app-polyfill/ie11"),
    "webpack-hot-middleware/client?reload=true",
    path.join(process.cwd(), "business/index.js"),
  ],
  output: {
    filename: "[name].js",
    chunkFilename: "[name].chunk.js",
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: "business/index.html",
    }),
  ],
  devtool: "eval-source-map",

  performance: {
    hints: false,
  },
});
