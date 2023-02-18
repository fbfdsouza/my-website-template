const path = require("path");
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    static: path.resolve(__dirname, "../dist"),
    compress: true,
    port: 3000,
  }
});
