const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "app/index.tsx"),
  output: {
    publicPath: '/',
    path: path.join(__dirname, "build"),
    filename: "[chunkhash].bundle.js",
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    alias: {
      public: path.resolve(__dirname, 'app/public/'),
      routes: path.resolve(__dirname, 'app/routes/'),
      utils: path.resolve(__dirname, 'app/utils/'),
      src: path.resolve(__dirname, 'app/src/'),
    },
    modules: ["node_modules"]
  },
  module: {
    rules: [
      { 
        test: /\.jsx?$/, 
        exclude: /node_modules/, 
        use: ["babel-loader"] 
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: "asset/resource" 
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "app/public/index.html"),
    }),
  ],
};