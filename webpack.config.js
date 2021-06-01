const HtmlWebpackPlugin = require("html-webpack-plugin");
const MinicSSeXTRACTplugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  devtool: "eval-source-map",
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MinicSSeXTRACTplugin.loader, {loader: "css-loader", options: {modules: true}}],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
    new MinicSSeXTRACTplugin(),
  ],
};
