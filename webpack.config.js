const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index-bundle.js"
  },
  module: {
    rule: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader"]
      }
    ]
  },
  plugin: [
    new HtmlWebpackPlugin({
      tempalte: "./src/index.html"
    })
  ]
};
