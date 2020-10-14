/*
  production mode config
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');

const definePlugin = require(resolvePath('.env.production'));

module.exports = {
  mode: 'production',
  output: {
    filename: `[name].[contenthash].js`,
    chunkFilename: `chunk/script/[name].[contenthash].js`
  },
  plugins: [
    new webpack.DefinePlugin(definePlugin),,
    new CleanWebpackPlugin(),
    new ExtractCssChunks({
      filename: 'chunk/style/[name].css'
    })
  ]
}