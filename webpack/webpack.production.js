/*
  production mode config
 */

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const plugins = [];

if(process.env.ANALYZER) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
  plugins.push(new BundleAnalyzerPlugin())
}

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
    }),
    ...plugins
  ]
}