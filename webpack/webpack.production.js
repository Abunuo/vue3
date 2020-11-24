/*
  production mode config
 */

const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const { resolvePath } = require('./utils')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: `[name].[contenthash].js`,
    chunkFilename: `chunk/script/[name].[contenthash].js`
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractCssChunks({
      filename: 'chunk/style/[name].css'
    })
  ]
}