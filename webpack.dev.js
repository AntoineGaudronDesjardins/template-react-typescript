const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "cheap-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "app/public"),
      publicPath: '/public',
    },
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
});
