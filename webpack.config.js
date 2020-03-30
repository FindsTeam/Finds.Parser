const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: {
    server: "./index.js",
  },
  mode: "development",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "/",
    filename: "[name].js"
  },
  target: "node",
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [ nodeExternals() ]
};