<<<<<<< HEAD
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

require("custom-env").env(process.env.NODE_ENV);

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
=======
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('custom-env').env(process.env.NODE_ENV);

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
  },

  devServer: {
    inline: true,
<<<<<<< HEAD
    port: 8080,
=======
    port: 3000,
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
    historyApiFallback: true,
    hot: true,
  },

  resolve: {
<<<<<<< HEAD
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
=======
    extensions: ["*", "js", "jsx", "ts", "tsx"],
    alias: path.resolve(__dirname, "src"),
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
  },

  module: {
    rules: [
      {
<<<<<<< HEAD
        test: /\.(gif|png|jpe?g|svg)$/i,
=======
        test: /\.(gif|jpe?g|png|svg)$/i,
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|ts|tsx|json)$/,
<<<<<<< HEAD
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ["babel-loader"],
      },
      {
        test: /\.s?css$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
=======
        include: path.resolve(__dirname, "src"),
        exclude: path.resolve(__dirname, "node_modules"),
        use: ["babel-loader"],
      },
      {
        test: /\.sc?ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "process.env.API": JSON.stringify(process.env.API),
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "public", to: "" },
        {
          from: path.resolve(__dirname, "public/_redirects"),
<<<<<<< HEAD
          to: "dist",
=======
          to: "dist"
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css",
    }),
<<<<<<< HEAD
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
};
=======
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html"
    }),
  ],
};
>>>>>>> 3fa2288a76e3a222d2264d6fa894c37fc0c9312b
