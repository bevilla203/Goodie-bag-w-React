/* eslint-disable no-undef */
"use strict";

const path = require("path");

module.exports = module.exports = {
  entry: ["@babel/polyfill", "./app/Main.js"],
  mode: "development",
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  context: __dirname,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      },
    ],
  },
};
